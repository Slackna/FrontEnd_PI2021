import { Compras } from "./compras.model";
import { Producto } from "./producto.model";

export class DetalleCompra {

    idDetalle?: number;
    FechaRegistro?: any;
    producto?: Producto; 
    compras?: Compras;
}
