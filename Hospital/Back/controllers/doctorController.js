'use strict'

const Receta = require('../models/receta');


global.listadoRecetas = [];

function crearRecetaMedica(req, res) {

    let params = req.body;
    let receta = new Receta();

    if (params.fechaGeneracion && params.nombrePaciente && params.padecimiento && params.Descripcion && params.precioConsulta) {
        receta.fechaGeneracion = params.fechaGeneracion;
        receta.nombrePaciente = params.nombrePaciente;
        receta.padecimiento = params.padecimiento;
        receta.Descripcion = params.Descripcion;
        receta.precioConsulta = params.precioConsulta;

        let modificarCitaSolicitada = global.listadoCitas.findIndex((i) => i.nombrePaciente == params.nombrePaciente &&
            i.fecha == params.fechaGeneracion && i.doctor == global.usuarioLogeado.nombre);
        console.log(modificarCitaSolicitada);
        if (modificarCitaSolicitada != -1) {
            global.listadoCitas[modificarCitaSolicitada].estado = 'Completada';
            receta.idPaciente = global.listadoCitas[modificarCitaSolicitada].idPaciente;
            console.log(global.listadoCitas[modificarCitaSolicitada].estado);
            listadoRecetas.push(receta);

            let doctorEncontrado = global.listaDoctores.findIndex((doc) => doc.nombre == usuarioLogeado.nombre)
            if (doctorEncontrado != -1) {
                global.listaDoctores[doctorEncontrado].citasAtendidas = global.listaDoctores[doctorEncontrado].citasAtendidas + 1;
                console.log(global.listaDoctores[doctorEncontrado]);//prueba de funcionamiento
                res.status(200).send(receta);
            } else {
                res.status(200).send("Doctor no encontrado");
            }
        } else {
            res.status(200).send("Paciente no encontrado");
        }
    } else {
        res.status(200).send({message:"Faltan Datos",status:2});
    }

}

function topDoctores(req, res) {

    const doctores = global.listaDoctores.filter(doctoresTop => doctoresTop.citasAtendidas > 3);
    if (doctores.length > 0) {
        res.status(200).send(doctores);
    } else {
        res.status(200).send({message:'No hay doctores con mas de 3 citas atendidas',status:2});
    }


}

function mostrarCitasDoctorPendientes(req, res) {

    const citasPendientes = global.listadoCitas.filter(citaP => citaP.estado == "Aceptado" && citaP.doctor==global.usuarioLogeado.nombre);
    if (citasPendientes.length > 0) {
        res.status(200).send(citasPendientes);
    } else {
        res.status(200).send({ message: 'No hay citas', status: 2 });
    }


}


module.exports = {
    crearRecetaMedica,
    topDoctores,
    mostrarCitasDoctorPendientes
};