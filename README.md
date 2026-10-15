# ⚡ Visual Prompt Assistant

An AI-powered chatbot built with **Google Gemini** that helps users transform simple image ideas into detailed, ready-to-use visual prompts for generative AI platforms like **Midjourney**, **DALL-E**, and more.

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-v5-000000?logo=express&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-API-4285F4?logo=google&logoColor=white)

---

## 📋 Description

**Visual Prompt Assistant** is an AI-based chatbot designed for content creators, graphic designers, and digital artists. This chatbot uses the **Gemini AI (NLP/LLM)** model to process natural language and provide relevant responses.

### Use Case
- Transform simple image descriptions into comprehensive visual prompts
- Provide popular style presets (Cinematic Film, NatGeo, Anime, 3D Pixar)
- Support multi-turn conversations (memory) so the AI understands context

### Creative Parameters
| Parameter | Value |
|---|---|
| Temperature | `1.0` (High Creativity) |
| Language Style | Indonesian explanation + English prompt output |
| Domain | Prompt Engineering for Visual AI |
| Additional Features | Conversation Memory, Style Presets, Copy-to-Clipboard |

---

## 🖥️ Preview

### Main View (Welcome Screen)
The initial chatbot interface with suggestion chips and a sidebar for style presets.

### Chat View
A conversation with the AI that generates visual prompts inside code blocks, complete with a copy button.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) version 18 or later
- API Key from [Google AI Studio](https://aistudio.google.com/apikey)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jeremya27/Visual-Prompt-Assistant.git
   cd Visual-Prompt-Assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root folder
   ```env
   GEMINI_API_KEY=your_api_key_here
   GEMINI_MODEL=gemini-3.6-flash
   ```

4. **Start the server**
   ```bash
   node index.js
   ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
Visual-Prompt-Assistant/
├── public/
│   ├── index.html      # Main chatbot page
│   ├── style.css        # Premium dark-mode styling
│   └── script.js        # Chatbot logic (frontend)
├── index.js             # Express server + Gemini AI endpoint
├── package.json         # Project dependencies
├── .env                 # API Key (not pushed to GitHub)
└── .gitignore           # Git ignored files
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | Server-side JavaScript runtime |
| **Express.js v5** | Web framework for API and static file serving |
| **Google Gemini AI** | AI model (LLM) for prompt generation |
| **Marked.js** | Markdown rendering for AI responses |
| **Font Awesome** | UI icons |
| **Vanilla HTML/CSS/JS** | Frontend without frameworks |

---

## ✨ Key Features

- 🤖 **AI-Powered** — Uses Google Gemini to generate detailed visual prompts
- 💬 **Conversation Memory** — AI remembers previous conversation context
- 🎨 **Style Presets** — Choose a visual style (Cinematic, Anime, NatGeo, Pixar)
- 📋 **Copy-to-Clipboard** — Copy generated prompts with a single click
- 🌙 **Dark Mode** — Modern and premium dark-themed interface
- 📱 **Responsive** — Supports both mobile and desktop views
- ⌨️ **Keyboard Shortcuts** — Enter to send, Shift+Enter for a new line

---

## 👤 Author

**Jeremya** — [@Jeremya27](https://github.com/Jeremya27)
