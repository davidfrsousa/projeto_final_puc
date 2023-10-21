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

app.get('/catalogo',(req,res)=>{
    catalogo('cnc',req,res).catch(console.dir);
});

app.get('/contato',(req,res)=>{
    res.render('contato.ejs');
});

app.get('/servicos',(req,res)=>{
    res.render('servicos.ejs');
});

async function catalogo(cat,req,res){
    try {
        const client = new MongoClient(uri);
        const database = client.db('abeliano');
        const collection = database.collection('products');

        const cursor = await collection.find();
        const products = [];

        for await(const doc of cursor){
            products.push(doc);
        }

        console.log(products);
        res.render('catalogo.ejs',{products: products});
    }finally{
        await client.close();
    }
}