'use strict'

global.listaDoctores = [
    { nombre: "Juan", usuario: "juan12", correo: "Juan@gmail.com", password: "123", citasAtendidas: 0 },
    { nombre: "Sam", usuario: "sam1", correo: "sam@gmail.com", password: "123", citasAtendidas: 0 },
    { nombre: "Andrea", usuario: "andrea1", correo: "andrea@gmail.com", password: "123", citasAtendidas: 0 },
    { nombre: "Estefany", usuario: "estefany1", correo: "estefa@gmail.com", password: "123", citasAtendidas: 0 }
];
global.listadoEnfermeras = [
    { nombre: "daniela", usuario: "dani1", correo: "dani@gmail.com", password: "123" },
    { nombre: "Katy", usuario: "katy1", correo: "katy@gmail.com", password: "123" }
];

function pruebaPaciente(req, res) {
    res.send("gokuuuuuuuuuuuu")
};

global.usuarioLogeado;


//Llamando al modelo
const Paciente = require('../models/paciente');
const Cita = require('../models/cita');
const Pedido = require('../models/pedido');




let listaPacientes = [];
let arrayM = [];

let listadoPedidos = [];
global.listadoCitas = [];
global.listadoMedicamentos = [
    { nombreMedicamento: "Panadol", precio: 5, cantidadDisponible: 10, cantidadSolicitada: 0, descripcion: "Analgésico y antipirético", unidadesVendidas: 0, subTotal: 0 },
    { nombreMedicamento: "Aspirina", precio: 4, cantidadDisponible: 10, cantidadSolicitada: 0, descripcion: "Medicamento que reduce el dolor, la fiebre, la inflamación y la coagulación de la sangre", unidadesVendidas: 0, subTotal: 0 },
    { nombreMedicamento: "Tabcin", precio: 3, cantidadDisponible: 10, cantidadSolicitada: 0, descripcion: "contiene Paracetamol que disminuye la fiebre y reduce el dolor, y Dextrometorfano que es un antitusivo que aminora el reflejo de la tos", unidadesVendidas: 0, subTotal: 0 },
    { nombreMedicamento: "Aleve", precio: 2, cantidadDisponible: 10, cantidadSolicitada: 0, descripcion: "s el analgésico ideal para los fuertes dolores de cuerpo, articulaciones y espalda", unidadesVendidas: 0, subTotal: 0 },
    { nombreMedicamento: "Acetaminofen", precio: 7, cantidadDisponible: 10, cantidadSolicitada: 0, descripcion: "sel analgésico ideal para los fuertes dolores de cuerpo, articulaciones y espalda", unidadesVendidas: 0, subTotal: 0 },
    { nombreMedicamento: "SalAndrews", precio: 7.5, cantidadDisponible: 10, cantidadSolicitada: 0, descripcion: "s el analgésico ideal para los fuertes dolores de cuerpo, articulaciones y espalda", unidadesVendidas: 0, subTotal: 0 }
];


function guardarPaciente(req, res) {

    let params = req.body;
    let paciente = new Paciente();

    if (params.nombre && params.apellido && params.usuario && params.correo && params.sexo
        && params.password && params.fechaNacimiento) {
        if (params.password.length > 8) {


            paciente.nombre = params.nombre;
            paciente.apellido = params.apellido;
            paciente.usuario = params.usuario;
            paciente.fechaNacimiento = params.fechaNacimiento;
            paciente.correo = params.correo;
            paciente.sexo = params.sexo;
            paciente.password = params.password;
            paciente.telefono = params.telefono;
            paciente.rol = 'paciente';


            let verificar = listaPacientes.find((i) => i.usuario == params.usuario)

            if (verificar) {
                res.status(200).send({ message: "Este Usuario Ya existe", status: "1" });
            } else {
                listaPacientes.push(paciente);
                res.status(200).send({ message: "Agregado Exitosamente", status: "2" });//Enviando objeto paciente
            }

        } else {
            res.status(200).send({ message: "Faltan digitos en la contraseña", status: "3" });
        }
    } else {
        res.status(200).send({ message: "Rellene todos los datos necesarios", status: "4" });
    }



}

function login(req, res) {
    let params = req.body;

    let loginPaciente = listaPacientes.find((i) => i.usuario == params.usuario
        && i.password == params.password)

    let loginDoctor = listaDoctores.find((i) => i.usuario == params.usuario
        && i.password == params.password)

    let loginEnfermera = listadoEnfermeras.find((i) => i.usuario == params.usuario
        && i.password == params.password)

    if (loginPaciente) {
        global.usuarioLogeado = loginPaciente;
        res.status(200).send({ message: "Usted es un paciente", status: "1", idUsuario: global.usuarioLogeado._id });
    } else if (loginDoctor) {
        global.usuarioLogeado = loginDoctor;
        res.status(200).send({ message: "Usted es un doctor", status: "2" });

    } else if (loginEnfermera) {
        global.usuarioLogeado = loginEnfermera;
        res.send({ message: "Usted es una enfermera", status: "3" });
    } else {
        res.status(200).send({ message: "Credenciales Incorrectas", status: "4" });
    }


}

function modificarPaciente(req, res) {
    let params = req.body;
    for (let i = 0; i < listaPacientes.length; i++) {

        if (listaPacientes[i]._id == usuarioLogeado._id) {


            let buscandoUsuarioPaciente = listaPacientes.find((j) => j.usuario == req.body.usuario)
            if (!buscandoUsuarioPaciente) {
                if (params.password.length >= 8) {

                    listaPacientes[i].usuario = params.usuario;
                    listaPacientes[i].nombre = params.nombre;
                    listaPacientes[i].apellido = params.apellido;
                    listaPacientes[i].correo = params.correo;
                    listaPacientes[i].sexo = params.sexo;
                    listaPacientes[i].password = params.password;
                    listaPacientes[i].telefono = params.telefono;
                    res.send({ message: "Usuario Actualizado ", status: "1" });
                } else {
                    res.send({ message: "La contraseña debe tener mas de 8 Caracteres  ", status: "3" });
                }
            } else {
                res.status(200).send({ message: "El nombre de Usuario ya existe ", status: "2" })
            }
        }
    }


}


function solicitarCita(req, res) {
    let params = req.body;
    let cita = new Cita();


    if (params.fecha && params.motivo && params.hora) {

        cita.idPaciente = usuarioLogeado._id;
        cita.nombrePaciente = usuarioLogeado.nombre;
        cita.fecha = params.fecha;
        cita.hora = params.hora;
        cita.motivo = params.motivo;
        cita.estado = 'Pendiente';
        cita.doctor = 'No asignado';

        let buscandoCitaPaciente = listadoCitas.find((j) => j.idPaciente == usuarioLogeado._id
            && j.fecha == params.fecha);

        if (buscandoCitaPaciente) {
            res.status(200).send({ message: "No puede tener dos citas el mismo dia", status: 1 });
        } else {
            listadoCitas.push(cita);
            res.status(200).send({ message: "Solicitud Exitosa", status: 2 });
        }

    } else {
        res.status(200).send({ message: "Faltan Datos ", status: 3 });
    }
}

function obtenerListaDeMisCitas(req, res) {


    const resultado = listadoCitas.filter(listadoCitas => listadoCitas.idPaciente == usuarioLogeado._id);
    if (resultado.length > 0) {
        res.status(200).send(resultado);
    } else {
        res.status(200).send({ message: 'No tiene ninguna cita', status: 2 });
    }
}

function comparMedicamentos(req, res) {
    let params = req.body;
    let pedido = new Pedido();

    if (params.total) {

        pedido.idComprador = usuarioLogeado._id;
        pedido.nombreComprador = usuarioLogeado.nombre;
        pedido.medicamentos = arrayM
        pedido.total = params.total;
        listadoPedidos.push(pedido);
        res.status(200).send(pedido);
        arrayM = [];
        for (let i = 0; i < listadoMedicamentos.length; i++) {
            listadoMedicamentos[i].subTotal = 0;
            listadoMedicamentos[i].cantidadSolicitada = 0;

        }

    } else {
        res.status(200).send('Faltan Datos')
    }


}
function agregarMedicina(req, res) {
    let params = req.body;

    const medicamentoE = listadoMedicamentos[params.posicion];

    let buscandoMedicina = arrayM.findIndex((j) => j.nombreMedicamento == params.nombre);
    if (buscandoMedicina == -1) {
        arrayM.push(medicamentoE);

        res.status(200).send(arrayM);
    } else {

        let idMedicamento = listadoMedicamentos.findIndex((j) => j.nombreMedicamento == arrayM[buscandoMedicina].nombreMedicamento);
        if (listadoMedicamentos[idMedicamento].cantidadDisponible == 10) {
            arrayM[buscandoMedicina].cantidadSolicitada += 2
            listadoMedicamentos[idMedicamento].cantidadDisponible -= 2
        } else {
            arrayM[buscandoMedicina].cantidadSolicitada += 1
            listadoMedicamentos[idMedicamento].cantidadDisponible -= 1
        }
        listadoMedicamentos[idMedicamento].subTotal = listadoMedicamentos[idMedicamento].cantidadSolicitada * listadoMedicamentos[idMedicamento].precio;

        res.status(200).send({ message: "agregado" });
    }


}

function eliminarMedicina(req, res) {

    let params = req.body;

    const medicamentoE = listadoMedicamentos[params.posicion];

    let buscandoMedicina = arrayM.findIndex((j) => j.nombreMedicamento == params.nombre);
    if (buscandoMedicina == -1) {
        res.status(200).send("No hay medicina")
    } else {
        let idMedicamento = listadoMedicamentos.findIndex((j) => j.nombreMedicamento == arrayM[buscandoMedicina].nombreMedicamento);
        if (arrayM[buscandoMedicina].cantidadSolicitada <= 0) {
            res.status(200).send({ message: "Medicamento Agotado", status: 2 })
        } else {
            arrayM[buscandoMedicina].cantidadSolicitada -= 1;
            listadoMedicamentos[idMedicamento].cantidadDisponible += 1
            listadoMedicamentos[idMedicamento].subTotal = listadoMedicamentos[idMedicamento].cantidadSolicitada * listadoMedicamentos[idMedicamento].precio;

            res.status(200).send(arrayM[buscandoMedicina]);
        }
    }
}











function verRecetas(req, res) {

    const recetasEncontradas = global.listadoRecetas.filter(recetaE => recetaE.idPaciente == usuarioLogeado._id);
    if (recetasEncontradas.length > 0) {
        res.status(200).send(recetasEncontradas);
    } else {
        res.status(200).send({ message: 'No tiene ninguna Receta', status: 2 });
    }

}

function verPedido(req, res) {

    const pedidoEncontrado = listadoPedidos.filter(pedidoE => pedidoE.idComprador == usuarioLogeado._id);
    if (pedidoEncontrado.length > 0) {
        res.status(200).send(pedidoEncontrado);
    } else {
        res.status(200).send({ message: 'No tiene ninguna Pedido', status: 2 });
    }

}

function mostrarMedicamentos(req, res) {

    const medicamentosDisponibles = listadoMedicamentos.filter(medicamento => medicamento.cantidadDisponible >= 0);
    if (medicamentosDisponibles.length > 0) {
        res.status(200).send(medicamentosDisponibles);
    } else {
        res.status(404).send('No hay medicamentos Disponibles');
    }


}



//haciendo que las funciones sean publicas
module.exports = {
    pruebaPaciente,
    guardarPaciente,
    login,
    modificarPaciente,
    solicitarCita,
    listadoCitas,
    obtenerListaDeMisCitas,
    comparMedicamentos,
    verRecetas,
    mostrarMedicamentos,
    agregarMedicina,
    eliminarMedicina,
    verPedido
};