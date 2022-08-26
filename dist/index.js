"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const upload_1 = require("./upload");
const app = express();
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
    //res.send(`Olá mundo!`);
});
//ROTA METODO POST PARA FAZER O UPLOAD COM UM MIDDLER
app.post('/', upload_1.default.single(`avatar`), (req, res) => {
    try {
        res.send(`Arquivo enviado com sucesso: ${req.file.fieldname}`);
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(3000, () => {
    console.log(`Listening on port 3000!`);
});
