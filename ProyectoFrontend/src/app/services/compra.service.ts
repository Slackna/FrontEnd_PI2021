import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compras } from '../models/compras.model';
import { Producto } from '../models/producto.model';


const baseUrl = "http://localhost:8095/compras/";
@Injectable({
  providedIn: 'root'
})
export class CompraService {
 

  constructor(private http: HttpClient) { }
  registraCompra(data:Compras,pro:number): Observable<any>{
    return this.http.post(baseUrl  + `guardarCompra/${pro}` ,data)
  }

  listarComprasPorUsuario(data:number):Observable<any>{
    return this.http.get<Compras[]>(baseUrl + 'listaComprasByUsuario',{
    params: new HttpParams().set('idUsuario', data)
    })
    
    ;
  }
}
