const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const welcomeScreen = document.getElementById('welcome-screen');
const newChatBtn = document.getElementById('new-chat-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');

// --- Conversation History (untuk fitur memory) ---
let conversationHistory = [];

// --- Auto-resize textarea ---
input.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});

// --- Enter to send, Shift+Enter for newline ---
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        form.dispatchEvent(new Event('submit', { cancelable: true }));
    }
});

// --- Suggestion Chips ---
document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        input.value = chip.dataset.text;
        input.focus();
        input.dispatchEvent(new Event('input'));
    });
});

// --- Preset Style Buttons ---
document.querySelectorAll('.preset-item').forEach(item => {
    item.addEventListener('click', () => {
        const presetText = item.dataset.preset;
        input.value = presetText + ' ';
        input.focus();
        input.dispatchEvent(new Event('input'));
        // Close sidebar on mobile
        sidebar.classList.remove('active');
    });
});

// --- New Chat ---
newChatBtn.addEventListener('click', () => {
    conversationHistory = [];
    chatBox.innerHTML = '';
    // Re-add welcome screen
    chatBox.innerHTML = `
        <div class="welcome-screen" id="welcome-screen">
            <div class="welcome-icon">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h2>Halo! Saya Visual Prompt Assistant 👋</h2>
            <p>Saya akan membantu Anda membuat prompt visual yang detail untuk AI seperti Midjourney atau DALL-E. Cukup deskripsikan ide gambar Anda!</p>
            <div class="welcome-suggestions">
                <button class="suggestion-chip" data-text="Gunung meletus di senja hari dengan lava mengalir">
                    <i class="fa-solid fa-mountain-sun"></i> Gunung meletus di senja hari
                </button>
                <button class="suggestion-chip" data-text="Kota futuristik di bawah air dengan gedung-gedung kaca">
                    <i class="fa-solid fa-city"></i> Kota futuristik bawah air
                </button>
                <button class="suggestion-chip" data-text="Astronot bermain gitar di permukaan bulan">
                    <i class="fa-solid fa-user-astronaut"></i> Astronot bermain gitar
                </button>
            </div>
        </div>
    `;
    // Re-bind suggestion chips
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            input.value = chip.dataset.text;
            input.focus();
            input.dispatchEvent(new Event('input'));
        });
    });
    sidebar.classList.remove('active');
});

// --- Mobile Menu Toggle ---
mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// --- Create Message Row ---
function createMessageRow(type, content) {
    const row = document.createElement('div');
    row.classList.add('message-row', type);

    const avatar = document.createElement('div');
    avatar.classList.add('avatar', type === 'user' ? 'user-avatar' : 'bot-avatar');
    avatar.innerHTML = type === 'user'
        ? '<i class="fa-solid fa-user"></i>'
        : '<i class="fa-solid fa-wand-magic-sparkles"></i>';

    const bubble = document.createElement('div');
    bubble.classList.add('message-bubble', type === 'user' ? 'user-bubble' : 'bot-bubble');

    if (type === 'user') {
        bubble.textContent = content;
    } else {
        bubble.innerHTML = content;
    }

    row.appendChild(avatar);
    row.appendChild(bubble);
    return { row, bubble };
}

// --- Create Loading Indicator ---
function createLoading() {
    const { row, bubble } = createMessageRow('bot', '');
    bubble.innerHTML = `
        <div class="loading-indicator">
            <div class="loading-dots">
                <span></span><span></span><span></span>
            </div>
            <span>Sedang meracik prompt visual...</span>
        </div>
    `;
    return { row, bubble };
}

// --- Add Copy Buttons to Code Blocks ---
function addCopyButtons(container) {
    container.querySelectorAll('pre').forEach(pre => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy-btn';
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Salin';

        copyBtn.addEventListener('click', () => {
            const codeEl = pre.querySelector('code');
            const text = codeEl ? codeEl.innerText : pre.innerText;
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Disalin!';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Salin';
                }, 2000);
            });
        });

        pre.style.position = 'relative';
        pre.appendChild(copyBtn);
    });
}

// --- Main Form Submit ---
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const userMessage = input.value.trim();
    if (!userMessage) return;

    // Remove welcome screen
    const ws = document.getElementById('welcome-screen');
    if (ws) ws.remove();

    // Show user message
    const { row: userRow } = createMessageRow('user', userMessage);
    chatBox.appendChild(userRow);

    // Add to conversation history
    conversationHistory.push({ role: 'user', text: userMessage });

    // Clear input
    input.value = '';
    input.style.height = 'auto';

    // Show loading
    const { row: loadingRow, bubble: loadingBubble } = createLoading();
    chatBox.appendChild(loadingRow);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                conversation: conversationHistory
            }),
        });

        if (!response.ok) throw new Error(`Server error: ${response.statusText}`);
        const data = await response.json();

        // Remove loading
        loadingRow.remove();

        if (data && data.result) {
            // Add bot response
            const botContent = marked.parse(data.result);
            const { row: botRow, bubble: botBubble } = createMessageRow('bot', botContent);
            chatBox.appendChild(botRow);

            // Add copy buttons
            addCopyButtons(botBubble);

            // Save to history
            conversationHistory.push({ role: 'model', text: data.result });
        }
    } catch (error) {
        // Replace loading with error
        loadingBubble.innerHTML = `
            <span style="color: var(--danger);">
                <i class="fa-solid fa-triangle-exclamation"></i> 
                Gagal menghubungi server. Pastikan server berjalan di port 3000.
            </span>
        `;
    } finally {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});