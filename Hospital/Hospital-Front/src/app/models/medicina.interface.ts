export class Medicina{
    constructor(
        public nombreMedicamento:string,
        public cantidadDisponible: any,
        public descripcion: string,
        public unidadesVendidas: string,
        public cantidadSolicitada:string,
        public subTotal:any,
        public precio:any
    ) { }
}