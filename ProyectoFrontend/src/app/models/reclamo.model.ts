import { Usuario } from "./usuario.model";

export class Reclamo {
    idReclamo?:number;
    descripcion?:String;
    fechaRegistro?:Date;
    estado?:number;
    nombre?:String;
    email?:String;
    usuario?:Usuario;
}
