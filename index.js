import express from "express";

const app = express();
const port = 3000;

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

app.get('/catalogo',(req,res)=>{
    res.render('catalogo.ejs');
});

app.get('/contato',(req,res)=>{
    res.render('contato.ejs');
});

app.get('/servicos',(req,res)=>{
    res.render('servicos.ejs');
});

app.get('/desenho',(req,res)=>{
    res.render('desenho.ejs');
});

app.get('/cnc',(req,res)=>{
    res.render('cnc.ejs');
});

app.get('/impressao',(req,res)=>{
    res.render('impressao.ejs');
});