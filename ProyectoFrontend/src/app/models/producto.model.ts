import { Byte } from "@angular/compiler/src/util";
import { Categoria } from "./categoria.model";
import { Usuario } from "./usuario.model";

export class Producto {
  idProducto?: number;
  nombre?: string; 
  marca?: string; 
  precio?: any; 
  direccion?: string;
  descripcion?: string; 
  condicion?: string;
  categoria?: Categoria; 
  img1?: string;
  usuario?: Usuario;
  fecha?: any;
  uploadfile?: any;
  
}
