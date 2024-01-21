import express from 'express';
import { findProduct } from "../database.js";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(process.argv[1]);

const router = express.Router();

router.get("/", async (req, res) => {
    let id = parseInt(req.id);
    console.log(id);
    let product = await findProduct(id);
    console.log(product);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

export default router;