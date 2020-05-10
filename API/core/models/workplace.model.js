'use strict'
//importar mongoose

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


//declarar el shema del documento;
var Schema = mongoose.Schema;
var workPlaceSchema =  Schema({
    company: String,
    duration: String,
    departament: String,
    boos: String,
    ocupation: String,
    salary: Number
})

module.exports = mongoose.model('workplace', workPlaceSchema);

//Exportar el modelo, pasar el nombre del documento a mongoose junto con el schema;
