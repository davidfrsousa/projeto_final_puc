import {findProduct} from './../database.js';
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
    let id = parseInt(req.id);
    console.log(id);
    let product = await findProduct(id);
    console.log(product);
    res.render("produto.ejs", product);
});

export default router;