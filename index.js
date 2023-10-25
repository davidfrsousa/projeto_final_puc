import express from "express";
import session from "express-session";
import inicial from "./routes/inicial.js";
import sobre from "./routes/sobre.js";
import contato from "./routes/contato.js";
import servicos from "./routes/serviços.js";
import catalogo from "./routes/catalogo.js";
import produto from "./routes/produto.js";
import login from './routes/login.js';
import editar from './routes/editar.js';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", inicial);
app.use("/sobre", sobre);
app.use('/login', login);
app.use('/checkout', login);
app.use("/contato", contato);
app.use("/servicos", servicos);
app.use("/catalogo", catalogo);
app.use("/produto/:id", (req, res, next) => {
  req.id = req.params.id;
  produto(req, res, next);
});
app.use('/editar/:id', (req,res,next)=>{
  req.id = req.params.id;
  editar(req,res,next);
});