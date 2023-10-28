'use strict'

var express = require('express');
const  enfermeraController  = require('../controllers/enfermeraController');
var api = express.Router();//para poder ingresar a los metodos put get post 




//Cuando hagan un post a localhost:3002/guargar-Paciente va a ejecutar esta funcion pruebaPaciente.guardarPaciente
api.put('/modificarCitas',enfermeraController.modificarCitas);//mandar parametros a la funcion desde la url o body
api.get('/mostrarCitasPendientes',enfermeraController.mostrarCitasPendientes);//mandar parametros a la funcion desde la url o body
module.exports=api;
