export class Productos {
    constructor (
        public descripcion:string,
        public valor_unitario:number,
        public unidad_medida:string,
        public cantidad_stock: number,
        public categoria: number

    ) {}
}