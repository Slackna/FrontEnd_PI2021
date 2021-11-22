import { Compras } from "./compras.model";
import { Producto } from "./producto.model";

export class DetalleCompra {

    idDetalle?: number;
    FechaCompras?: Date;
    producto?: Producto; 
    compras?: Compras;
}
