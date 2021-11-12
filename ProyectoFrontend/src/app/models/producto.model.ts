import { Byte } from "@angular/compiler/src/util";
import { Categoria } from "./categoria.model";

export class Producto {
  idProducto?: number;
  nombre?: string; 
  marca?: string; 
  precio?: any; 
  direccion?: string;
  descripcion?: string; 
  condicion?: string;
  categoria?: Categoria; 
  img1?: any;
  idUsuario?: number;
  
}
