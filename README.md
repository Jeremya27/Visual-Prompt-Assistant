# ⚡ Visual Prompt Assistant

Chatbot AI berbasis **Google Gemini** yang membantu pengguna mengubah ide gambar sederhana dalam bahasa Indonesia menjadi prompt visual bahasa Inggris yang detail dan siap pakai untuk platform AI generatif seperti **Midjourney**, **DALL-E**, dan lainnya.

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-v5-000000?logo=express&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-API-4285F4?logo=google&logoColor=white)

---

## 📋 Deskripsi

**Visual Prompt Assistant** adalah chatbot berbasis AI yang dirancang untuk kreator konten, desainer grafis, dan seniman digital. Chatbot ini menggunakan model **Gemini AI (NLP/LLM)** untuk memproses bahasa alami dan memberikan respons yang relevan.

### Use Case
- Mengubah deskripsi gambar sederhana menjadi prompt visual yang lengkap
- Menyediakan preset gaya populer (Cinematic Film, NatGeo, Anime, 3D Pixar)
- Mendukung percakapan multi-turn (memory) agar AI memahami konteks

### Parameter Kreatif
| Parameter | Nilai |
|---|---|
| Temperature | `1.0` (Kreativitas Tinggi) |
| Gaya Bahasa | Penjelasan Bahasa Indonesia + Prompt Bahasa Inggris |
| Domain | Prompt Engineering untuk AI Visual |
| Fitur Tambahan | Conversation Memory, Preset Gaya, Copy-to-Clipboard |

---

## 🖥️ Screenshots

### Tampilan Utama (Welcome Screen)
Tampilan awal chatbot dengan suggestion chips dan sidebar preset gaya.

### Tampilan Chat
Percakapan dengan AI yang menghasilkan prompt visual dalam blok kode, lengkap dengan tombol salin.

---

## 🚀 Cara Menjalankan

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- API Key dari [Google AI Studio](https://aistudio.google.com/apikey)

### Instalasi

1. **Clone repositori**
   ```bash
   git clone https://github.com/Jeremya27/Visual-Prompt-Assistant.git
   cd Visual-Prompt-Assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Buat file `.env`** di root folder
   ```env
   GEMINI_API_KEY=your_api_key_here
   GEMINI_MODEL=gemini-2.0-flash
   ```

4. **Jalankan server**
   ```bash
   node index.js
   ```

5. **Buka browser** dan akses:
   ```
   http://localhost:3000
   ```

---

## 📁 Struktur Proyek

```
Visual-Prompt-Assistant/
├── public/
│   ├── index.html      # Halaman utama chatbot
│   ├── style.css        # Styling dark-mode premium
│   └── script.js        # Logika chatbot (frontend)
├── index.js             # Server Express + endpoint Gemini AI
├── package.json         # Dependencies proyek
├── .env                 # API Key (tidak di-push ke GitHub)
└── .gitignore           # File yang diabaikan Git
```

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| **Node.js** | Runtime JavaScript di server |
| **Express.js v5** | Web framework untuk API dan static files |
| **Google Gemini AI** | Model AI (LLM) untuk generate prompt |
| **Marked.js** | Render markdown dari respons AI |
| **Font Awesome** | Ikon UI |
| **Vanilla HTML/CSS/JS** | Frontend tanpa framework |

---

## ✨ Fitur Utama

- 🤖 **AI-Powered** — Menggunakan Google Gemini untuk menghasilkan prompt visual
- 💬 **Conversation Memory** — AI mengingat konteks percakapan sebelumnya
- 🎨 **Preset Gaya** — Pilih gaya visual (Cinematic, Anime, NatGeo, Pixar)
- 📋 **Copy-to-Clipboard** — Salin prompt hasil generasi dengan satu klik
- 🌙 **Dark Mode** — Tampilan gelap yang modern dan premium
- 📱 **Responsive** — Mendukung tampilan mobile dan desktop
- ⌨️ **Keyboard Shortcut** — Enter untuk kirim, Shift+Enter untuk baris baru

---

## 👤 Author

**Jeremy** — [@Jeremya27](https://github.com/Jeremya27)
