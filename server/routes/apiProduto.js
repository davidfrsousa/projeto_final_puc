import express from 'express';
import { findProduct } from "../database.js";

const router = express.Router();

router.get("/", async (req, res) => {
    let id = parseInt(req.id);
    console.log(id);
    let product = await findProduct(id);
    console.log(product);
    //res.sendFile(`C:\\Users\\david\\Desktop\\React\\Teste-server-final\\server\\build\\index.html`);
    res.json(product);
});

export default router;