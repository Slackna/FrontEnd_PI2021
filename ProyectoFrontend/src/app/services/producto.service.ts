import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { Usuario } from '../models/usuario.model';


const baseUrl = "http://localhost:8095/producto/";
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   UsuarioId="http://localhost:8095/rest/";
  

  constructor(private http: HttpClient) { }
  registraProducto(data:Producto):Observable<any>{
    // const req=new HttpRequest('POST', baseUrl  + 'registraProducto' ,data);
  return this.http.post(baseUrl  + 'registraProducto' ,data );
    // return this.http.request(req);
    
  }
  
  registraImagenes(data:FormData):Observable<any>{
    // const req=new HttpRequest('POST', baseUrl  + 'registraImagenes' ,data);
  return this.http.post(baseUrl  + 'registraImagenes' ,data );
    // return this.http.request(req);
    
  }

  // obtenerImg(urlimg:String):Observable<any>{
  //   return this.http.get(baseUrl + '', )
  // }

  listarProductoCategorias(data:number):Observable<any>{
    return this.http.get<Producto[]>(baseUrl + 'listaProductoByCat',{
    params: new HttpParams().set('idCategoria', data)
    })
    
    ;
  }
  
  public lista(): Observable<Producto[]> {
    return this.http.get<Producto[]>(baseUrl + 'listaProducto');
  }
  public detail(id: number): Observable<Producto> {
    return this.http.get<Producto>(baseUrl + `detail/${id}`);
  }
  public getUserId(nombre: string){
    return this.http.get<Usuario[]>(this.UsuarioId + `buscarUsuario/${nombre}`)
    
  }

  listarProductoUsuario(data:number):Observable<any>{
    return this.http.get<Producto[]>(baseUrl + 'listaProductoByUsuario',{
    params: new HttpParams().set('idUsuario', data)
    })
    
    ;
  }
}