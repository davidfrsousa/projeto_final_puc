import express from "express";
import session from "cookie-session";
import "dotenv/config";
import home from "./routes/home.js";
import sobre from "./routes/sobre.js";
import produtos from "./routes/produtos.js";
import apiProdutos from "./routes/apiProdutos.js";
import servicos from "./routes/servicos.js";
import login from "./routes/login.js";
import apiLogin from "./routes/apiLogin.js";
import produto from "./routes/produto.js";
import apiProduto from "./routes/apiProduto.js";
import editar from "./routes/editar.js";
import apiEditar from "./routes/apiEditar.js";
import contato from "./routes/contato.js";
import cors from "cors";

const port = process.env.port || 3000;
const secret = process.env.SECRET;
const app = express();

app.use(
  session({
    secret: secret,
    name: "sessionID",
    cookie: {
      httpOnly: true,
    },
  })
);

app.use(express.static("build"));
app.use(express.urlencoded({ extended: true }));

//app.use(cors({ origin: "http://localhost:3001", credentials: true }));
//app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cors({credentials: true}));
app.use("/", home);
app.use("/sobre", sobre);
app.use("/produtos", produtos);
app.use("/api/produtos", apiProdutos);
app.use("/servicos", servicos);
app.use("/login", login);
app.use("/api/login", apiLogin);
app.use("/produto/:id", (req, res, next) => {
  req.id = req.params.id;
  produto(req, res, next);
});
app.use("/api/produto/:id", (req, res, next) => {
  req.id = req.params.id;
  apiProduto(req, res, next);
});
app.use("/editar/:id", (req, res, next) => {
  req.id = req.params.id;
  editar(req, res, next);
});
app.use("/api/editar/:id", (req, res, next) => {
  req.id = req.params.id;
  apiEditar(req, res, next);
});
app.use("/contato", (req, res, next) => {
  contato(req, res, next);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
