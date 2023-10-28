export class Receta{
    constructor(
        public fechaGeneracion:string,
        public nombrePaciente: string,
        public idPaciente: string,
        public padecimiento: string,
        public Descripcion:string,
        public precioConsulta:string
    ) { }
}