// serve/index.js
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Ruta para obtener todos los posts
app.get('/api/posts', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'posts.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(data);
    res.json(parsed);
  } catch (err) {
    console.error('Error al leer el archivo:', err);
    res.status(500).json({ error: 'No se pudo cargar el archivo' });
  }
});

// Ruta para obtener un post por slug
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'posts.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const posts = JSON.parse(data);
    const post = posts.post.find(p => p.slug === req.params.slug);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json(post);
  } catch (err) {
    console.error('Error al leer el archivo:', err);
    res.status(500).json({ error: 'No se pudo cargar el archivo' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});

