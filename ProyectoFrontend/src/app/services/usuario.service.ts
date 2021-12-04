import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8095/rest/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}
  create(data:Usuario):Observable<any> {
         return this.http.post(baseUrl + "registraUsuario",data)
      }
    actualiza(aux:Usuario):Observable<any>{
      return this.http.put<any>(baseUrl+"actualiza",aux);
  }
  public getUserId(nombre: string){
    return this.http.get<Usuario[]>(baseUrl+ `buscarUsuario/${nombre}`)
    
  }
  consulta1(nombre1:string,nombreUsuario1:string,email1:string):Observable<any>{
    const  params = new HttpParams()
     .set("nombre",nombre1)
     .set("nombreUsuario",nombreUsuario1)
     .set("email",email1)
     return this.http.get(baseUrl + "porUsuarioNombreEmailConParametros",{params})
   }

 consultar(filtro:string):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(baseUrl + "/listaClientePorNombreLike/" + filtro );
}
}
