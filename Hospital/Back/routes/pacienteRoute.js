'use strict'

var express = require('express');
const  pruebaPaciente  = require('../controllers/pacienteController');
var api = express.Router();//para poder ingresar a los metodos put get post 


api.get('/pruebaPaciente',pruebaPaciente.pruebaPaciente);

//Cuando hagan un post a localhost:3002/guargar-Paciente va a ejecutar esta funcion pruebaPaciente.guardarPaciente
api.post('/guardar-Paciente',pruebaPaciente.guardarPaciente);//mandar parametros a la funcion desde la url o body
api.post('/login',pruebaPaciente.login);
api.put('/modificarPaciente',pruebaPaciente.modificarPaciente);
api.post('/solicitarCita',pruebaPaciente.solicitarCita);
api.get('/obtenerListaDeMisCitas',pruebaPaciente.obtenerListaDeMisCitas);
api.post('/comparMedicamentos',pruebaPaciente.comparMedicamentos);
api.get('/verRecetas',pruebaPaciente.verRecetas);
api.get('/verPedido',pruebaPaciente.verPedido);
api.get('/mostrarMedicamentos',pruebaPaciente.mostrarMedicamentos);
api.post('/agregarMedicina',pruebaPaciente.agregarMedicina);
api.post('/quitarMedicina',pruebaPaciente.eliminarMedicina);

module.exports=api;
