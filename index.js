const express = require('express')
const app = express();
const cors = require('cors');

const { produto } = require('./models')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next();
});

app.get('/produtos', async function(req, res){
    const produtos = await produto.findAll(req.body);
    res.json(produtos);
});

app.listen(3001, () => {
    console.log(`O servidor está rodando na porta 3001`)
})