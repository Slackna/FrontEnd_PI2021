import { Compras } from "./compras.model";
import { Usuario } from "./usuario.model";

export class Pedido {
    idPedido?: number;
    fecha?: any;
    detalle?: Compras;
    usuario?: Usuario; 
}
