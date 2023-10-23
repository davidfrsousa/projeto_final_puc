import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = 3000;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/sobre", (req, res) => {
  res.render("sobre.ejs");
});

app.get("/catalogo", async (req, res) => {
  let cat = await catalogo();
  console.log(cat);
  res.render('catalogo.ejs',{products:cat});
});

app.get("/produto/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let product = await findProduct(id);
  console.log(product);
  res.render("produto.ejs",product);
});

app.get("/contato", (req, res) => {
  res.render("contato.ejs");
});

app.get("/servicos", (req, res) => {
  res.render("servicos.ejs");
});

async function catalogo() {
  try {
    const database = client.db("abeliano");
    const collection = database.collection("products");

    const cursor = await collection.find();
    const products = [];

    for await (const doc of cursor) {
      products.push(doc);
    }

    return products;
  } catch(error) {
    console.log(error);
  }
}

async function findProduct(id) {
  try {
    const database = client.db("abeliano");
    const collection = database.collection("products");

    const query = { _id: id};

    const prod = await collection.findOne(query);
    return prod;
  } catch(error) {
    console.log(error);
  }
}