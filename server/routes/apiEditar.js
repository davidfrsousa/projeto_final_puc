import express from "express";
import { findProduct, update } from "../database.js";
import { isAuthenticated } from "./apiLogin.js";

const router = express.Router();

router.get("/", isAuthenticated, async (req, res) => {
  let id = parseInt(req.id);
  let product = await findProduct(id);
  console.log(product);
  res.json(product);
});

router.post("/", (req, res) => {
  console.log(req.id);
  console.log(req.body);
  const doc = {
    _id: parseInt(req.id),
    nome: req.body.nome,
    descricao: req.body.descricao,
    categoria: req.body.categoria,
    preco: req.body.preco,
  };
  console.log("____________________________" + doc);
  update(doc);
  res.json("success");
});

export default router;
