export class Cita {
    constructor(

        public _id: any,
        public nombrePaciente: string,
        public fecha: string,
        public hora: string,
        public motivo: string,
        public estado: string,
        public doctor: string
    ) { }
}