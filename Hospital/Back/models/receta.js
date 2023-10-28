'use strict'

let mongoose = require('mongoose');

var Schema = mongoose.Schema;

//DEFINIENDO ESTRUCTURA DEL ESQUEMA
var recetaSchema = Schema({
    fechaGeneracion: String,
    nombrePaciente: String,
    idPaciente:String,
    padecimiento: String,
    Descripcion: String,
    precioConsulta: String
});

//EXPORTANDO ESQUEMA --haciendo publico el esquema
module.exports = mongoose.model('Receta', recetaSchema);