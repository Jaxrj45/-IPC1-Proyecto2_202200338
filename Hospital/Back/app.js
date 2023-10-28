'use strict'

//IMPORTANDO MODULOS
var express = require('express');
var bodyParser = require('body-parser');




var app = express();


var paciente_routes = require('./routes/pacienteRoute');
var enfermera_routes = require('./routes/enfermeraRoute');
var doctor_routes = require('./routes/doctorRoute');


app.use(bodyParser.urlencoded({extended:false})); //CONVERTIR PETICIONES A JSON
app.use(bodyParser.json());



// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});


/*RUTAS */
app.use('/paciente',paciente_routes);
app.use('/enfermera',enfermera_routes);
app.use('/doctor',doctor_routes);



module.exports = app;//Cada fichero es un módulo de nuestro proyecto que podemos exportar.

