'use strict'

var app = require('./app.js');
var mongoose = require('mongoose');
var port = 6874;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connetion has been ready');
    //Crecion del server
    app.listen(port, ()=>{
        console.log('Server Connection Success. Is running in port: '+port)
    })
})
.catch(error=> console.log(error));