'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//Archivos RUTA 

//middleares 

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json()); //convierte todo lo que llegue por boddy a JSON

//CORS

//variables example

var users = [
]

//RUTAS

app.get('/test', (req, res)=>{
    res.status(200).send({
      message: 'Hi! It is my first API with Node Js'
    });
});

app.get('/checkuser/:name', (req, res) => {
    res.status(200).send({
        message: `Your name has ${req.params.name.length} Characters`
    });
})

app.get('/playwithname/:name', (req, res) => {
    res.status(200).send({
        message: `Your name is ${req.params.name.length} Characters`
    });
})

app.post('/registerUser', (req, res)=>{
    users.push(req.body)
    res.status(200).send({
        message: `Usuario ${req.body.name} registrado. Hay ${users.length} usuarios`
    });
})

module.exports = app;

