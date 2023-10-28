'use strict'

const { listadoCitas } = require("./pacienteController");

function modificarCitas(req, res) {
    let params = req.body;
    console.log(global.listadoCitas.length);
    if (params._id && params.estado && params.doctor) {
        if (params.estado == 'Aceptado') {
            for (let i = 0; i < global.listadoCitas.length; i++) {
                if (global.listadoCitas[i]._id == params._id) {
                    global.listadoCitas[i].estado = params.estado;
                    global.listadoCitas[i].doctor = params.doctor;
                }
            }
            res.status(200).send({ message: "Cita Modificada", status: 1 });

        } else {
            for (let i = 0; i < global.listadoCitas.length; i++) {
                if (global.listadoCitas[i]._id == params._id) {
                    global.listadoCitas[i].estado = "Rechazado";
                    global.listadoCitas[i].doctor = "No Asignado";
                }
            }
            res.status(200).send({ message: "Cita No aceptada", status: 3 });
        }
    } else {
        res.status(200).send({ message: "ingrese los campos necesarios", status: 2 });
    }
}

function mostrarCitasPendientes(req, res) {

    const citasPendientes = global.listadoCitas.filter(citaP => citaP.estado == "Pendiente");
    if (citasPendientes.length > 0) {
        res.status(200).send(citasPendientes);
    } else {
        res.status(200).send({ message: 'No hay citas Pendientes', status: 2 });
    }


}





module.exports = {
    modificarCitas,
    mostrarCitasPendientes



}



