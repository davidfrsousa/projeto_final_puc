import express from 'express';
import {catalogo} from './../database.js';

const router = express.Router();

router.get("/", async (req, res) => {
    let cat = await catalogo();
    console.log(cat);
    res.render("catalogo.ejs", { products: cat });
});

export default router;