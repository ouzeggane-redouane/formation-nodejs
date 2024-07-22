const express = require('express');

const app = express();

app.use( afficher );

//Routage
app.get('/', (req, res) => {
    res.status(200).send("Hello world ...");
})

app.get('/products', (req, res) => {
    res.status(200).send("List of products ...");
})

app.get('/*', (req, res)=>{
    res.status(404).send("Error 404")
})

function afficher(req, res, next) {
    console.log(req.originalUrl);
    
    if (req.originalUrl == "/products"){
        next();
    }
    else{
        res.status(500).send("Error");
    }
}

const PORT = process.env.PORT || 3500
app.listen(PORT)