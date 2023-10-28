'use strict'

let mongoose = require('mongoose');

var Schema = mongoose.Schema;

//DEFINIENDO ESTRUCTURA DEL ESQUEMA
var pedidoSchema = Schema({ 
        idComprador:String,
        nombreComprador: String,
        medicamentos: [],
        cantidad: String,
        total:String
});

//EXPORTANDO ESQUEMA --haciendo publico el esquema
module.exports = mongoose.model('Pedido', pedidoSchema);