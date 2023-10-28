'use strict'

let mongoose = require('mongoose');

var Schema = mongoose.Schema;

//DEFINIENDO ESTRUCTURA DEL ESQUEMA
var pacienteSchema = Schema({ 
        nombre: String,
        apellido: String,
        usuario: String,
        correo: String,
        sexo: String,
        fechaNacimiento:String,
        password: String,
        telefono: String,
        rol: String,
});

//EXPORTANDO ESQUEMA --haciendo publico el esquema
module.exports = mongoose.model('Paciente', pacienteSchema);