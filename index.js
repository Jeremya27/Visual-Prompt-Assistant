import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; 
import { GoogleGenAI } from '@google/genai';

// Setup untuk menentukan direktori folder saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const GEMINI_MODEL = process.env.GEMINI_MODEL;

app.use(cors());
app.use(express.json());

// Baris INI SANGAT PENTING untuk menampilkan file di dalam folder 'public' (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/chat', async (req, res) => {
  const { conversation } = req.body;
  
  try {
    if (!Array.isArray(conversation)) throw new Error('Messages must be an array!');
    
    const contents = conversation.map(({ role, text }) => ({
      role,
      parts: [{ text }]
    }));

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents,
      config: {
        temperature: 1.0,
        systemInstruction: "Kamu adalah Prompt Engineer ahli untuk AI visual. Berikan penjelasan singkat dalam bahasa Indonesia, lalu berikan prompt bahasa Inggrisnya saja di DALAM blok kode markdown (```). Jika ada lebih dari satu opsi, pisahkan masing-masing prompt ke dalam blok kodenya sendiri.",
      },
    });

    res.status(200).json({ result: response.text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));