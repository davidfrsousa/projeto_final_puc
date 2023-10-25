import express from 'express';
import {findProduct, update} from './../database.js';
import {isAuthenticated} from './login.js';

const router = express.Router();

router.get("/", isAuthenticated, async (req, res) => {
    let id = parseInt(req.id);
    let product = await findProduct(id);
    console.log(product);
    res.render("editar.ejs", product);
});

router.post("/", (req, res) => {
    console.log(req.id);
    const doc = {
      _id: parseInt(req.id),
      nome: req.body.nome,
      descricao: req.body.descricao,
      categoria: req.body.categoria,
      preco: req.body.preco,
    };
    update(doc);
    res.redirect("/catalogo");
  });

export default router;