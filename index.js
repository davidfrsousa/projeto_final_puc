import express from "express";
import { MongoClient } from "mongodb";
import session from "express-session";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

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
  //console.log(cat);
  res.render("catalogo.ejs", { products: cat });
});

app.get("/editar/:id", isAuthenticated, async (req, res) => {
  let id = parseInt(req.params.id);
  let product = await findProduct(id);
  console.log(product);
  res.render("editar.ejs", product);
});

app.get("/produto/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let product = await findProduct(id);
  console.log(product);
  res.render("produto.ejs", product);
});

app.post("/update/:id", (req, res) => {
  const doc = {
    _id: parseInt(req.params.id),
    nome: req.body.nome,
    descricao: req.body.descricao,
    categoria: req.body.categoria,
    preco: req.body.preco,
  };
  //console.log(doc);
  update(doc);
  res.redirect("/catalogo");
});

app.get("/contato", (req, res) => {
  res.render("contato.ejs");
});

app.get("/servicos", (req, res) => {
  res.render("servicos.ejs");
});

app.get("/login", isAuthenticated, (req, res) => {
  res.render("login.ejs", { user: req.session.user });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const pw = req.body.password;
  let result = await login(username, pw);
  if (result) {
    req.session.regenerate(function (err) {
      if (err) next(err);

      // store user information in session, typically a user id
      req.session.user = req.body.username;

      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save(function (err) {
        if (err) return next(err);
        res.redirect("/catalogo");
      });
    });
  } else {
    res.render("login.ejs", { alerta: "Credenciais inválidas" });
  }
});

app.get("/logout", (req, res, next) => {
  req.session.user = null;
  req.session.save(function (err) {
    if (err) next(err);

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err);
      res.redirect("/");
    });
  });
});

function isAuthenticated(req, res, next) {
  if (req.session.user) next();
  else res.render("login.ejs");
}

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
  } catch (error) {
    console.log(error);
  }
}

async function findProduct(id) {
  try {
    const database = client.db("abeliano");
    const collection = database.collection("products");

    const query = { _id: id };

    const prod = await collection.findOne(query);
    return prod;
  } catch (error) {
    console.log(error);
  }
}

async function login(user, pw) {
  try {
    const database = client.db("abeliano");
    const collection = database.collection("users");

    const query = { username: user, password: pw };

    const result = await collection.findOne(query);
    if (result) {
      return result;
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function update(updatedDoc) {
  try {
    const database = client.db("abeliano");
    const collection = database.collection("products");

    const filter = { _id: updatedDoc._id };
    const updateDoc = {
      $set: updatedDoc,
    };

    const result = await collection.updateOne(filter, updateDoc);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
    );
  } catch (error) {
    console.log(error);
  }
}
