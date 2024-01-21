import express from 'express';
import {catalogo} from '../database.js';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(process.argv[1]);

const router = express.Router();

router.get("/", async (req, res) => {
    let cat = await catalogo();
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //res.json(cat);
});

export default router;