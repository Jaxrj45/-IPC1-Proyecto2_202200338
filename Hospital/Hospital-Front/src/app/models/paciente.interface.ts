export class Paciente {
    constructor(
        public nombre: string,
        public apellido: string,
        public usuario: string,
        public correo: string,
        public fechaNacimiento: string,
        public sexo: string,
        public password: string,
        public telefono: string
    ) { }
}