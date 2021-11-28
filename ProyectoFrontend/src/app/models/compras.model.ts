import { Usuario } from "./usuario.model";

export class Compras {

    idCompras?: number;
    fecha?: any;
    monto?: number; 
    nombreProducto?: string;
    estado?: number; 
    direccion?: string;
    pais?: string;
    distrito?: string;
    provincia?: string;
    codigoPostal?: string;
    nota?: string;
    usuario?: Usuario;
}
