import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { Usuario } from '../models/usuario.model';


const baseUrl = "http://localhost:8095/producto/";
@Injectable({
  providedIn: 'root'
})
export class ProductoService {




  constructor(private http: HttpClient) { }
  registraProducto(data: Producto): Observable<any> {
    return this.http.post(baseUrl + 'registraProducto', data);

  }

  registraImagenes(data: FormData): Observable<any> {

    return this.http.post(baseUrl + 'registraImagenes', data);


  }


  listarProductoCategorias(data: number): Observable<any> {
    return this.http.get<Producto[]>(baseUrl + 'listaProductoByCat', {
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

  eliminar(idProducto:number):Observable<any>{
    return this.http.delete<any>(baseUrl + "delete/" + idProducto);
  }
  actualiza(aux:Producto):Observable<any>{
    return this.http.put<any>(baseUrl+"actualizaProducto",aux);
}


  listarProductoUsuario(data: number): Observable<any> {
    return this.http.get<Producto[]>(baseUrl + 'listaProductoByUsuario', {
      params: new HttpParams().set('idUsuario', data)
    })

      ;
  }
}