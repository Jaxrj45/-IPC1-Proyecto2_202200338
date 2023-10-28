'use strict'

var express = require('express');
const  doctorController  = require('../controllers/doctorController');
var api = express.Router();//para poder ingresar a los metodos put get post 




//Cuando hagan un post a localhost:3002/guargar-Paciente va a ejecutar esta funcion pruebaPaciente.guardarPaciente
api.post('/crearReceta',doctorController.crearRecetaMedica);//mandar parametros a la funcion desde la url o body
api.get('/topDoctores',doctorController.topDoctores);//mandar parametros a la funcion desde la url o body
api.get('/mostrarCitasDoctorPendientes',doctorController.mostrarCitasDoctorPendientes);//mandar parametros a la funcion desde la url o body
module.exports=api;
