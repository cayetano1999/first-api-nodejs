'use strict'

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var Schema = mongoose.Schema;

var projectSchema = Schema({
    name: String,
    category: String,
    durationTime: String,
    technologies: [String],
    year: Number,
    description: String
})

module.exports = mongoose.model('projects', projectSchema);

//Mongose se encarga de exportar este modelo a la base de datos