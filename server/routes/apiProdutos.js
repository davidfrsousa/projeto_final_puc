import express from 'express';
import {catalogo} from '../database.js';

const router = express.Router();

router.get("/", async (req, res) => {
    let cat = await catalogo();
    //res.sendFile(`C:\\Users\\david\\Desktop\\React\\Teste-server-final\\server\\build\\index.html`);
    res.json(cat);
});

export default router;