'use strict'

let mongoose = require('mongoose');

var Schema = mongoose.Schema;

//DEFINIENDO ESTRUCTURA DEL ESQUEMA
var citaSchema = Schema({
    idPaciente: String,
    nombrePaciente:String,
    fecha: String,
    hora: String,
    motivo: String,
    estado:String,
    doctor:String,
});

//EXPORTANDO ESQUEMA --haciendo publico el esquema
module.exports = mongoose.model('Cita', citaSchema);