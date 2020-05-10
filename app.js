'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
//Archivos RUTA 
  var project_controller_routes = require('../backend/API/core/controllers/project/project.router.js');  
  var workplace_controller_routes = require('../backend/API/core/controllers/workplace/workplace.router.js');

//middleares 
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json()); //convierte todo lo que llegue por boddy a JSON

//CORS
//variables example

//RUTAS
app.use('/api/project', project_controller_routes);
app.use('/api/workplace', workplace_controller_routes);
app.use(cors());

// app.get('/test', (req, res)=>{
//     res.status(200).send({
//       message: 'Hi! It is my first API with Node Js'
//     });
// });

// app.get('/checkuser/:name', (req, res) => {
//     res.status(200).send({
//         message: `Your name has ${req.params.name.length} Characters`
//     });
// })

// app.get('/playwithname/:name', (req, res) => {
//     res.status(200).send({
//         message: `Your name is ${req.params.name.length} Characters`
//     });
// })

app.post('/registerUser', (req, res)=>{
    users.push(req.body)
    res.status(200).send({
        message: `Usuario ${req.body.name} registrado. Hay ${users.length} usuarios`
    });
})

module.exports = app;

