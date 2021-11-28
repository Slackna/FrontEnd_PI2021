import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compras } from '../models/compras.model';
import { DetalleCompra } from '../models/detalle-compra.model';
import { Producto } from '../models/producto.model';


const baseUrl = "http://localhost:8095/compras/";
@Injectable({
  providedIn: 'root'
})
export class CompraService {
 

  constructor(private http: HttpClient) { }

  lista(data:number): Observable<DetalleCompra[]> {
    return this.http.get<DetalleCompra[]>(baseUrl + 'listaDetallePorId' ,{
      params: new HttpParams().set('idCompras', data)
    });
  }




  registraCompra(data:Compras,pro:number): Observable<any>{
    return this.http.post(baseUrl  + `guardarCompra/${pro}` ,data)
  }

  listarComprasPorUsuario(data:number):Observable<any>{
    return this.http.get<Compras[]>(baseUrl + 'listaComprasByUsuario',{
    params: new HttpParams().set('idUsuario', data)
    })
    
    ;
  }
  listarDetallePorUsuario(data:number):Observable<any>{
    return this.http.get<DetalleCompra[]>(baseUrl + 'listaDetalleByUsuario',{
    params: new HttpParams().set('idUsuario', data)
    })
    
    ;
  }
  actualiza(aux:Compras):Observable<any>{
    return this.http.put<any>(baseUrl+"actualiza",aux);
}

listarPedidoPorUsuario(data:number):Observable<any>{
  return this.http.get<Compras[]>(baseUrl + 'listaPedidoByUsuario',{
  params: new HttpParams().set('idUsuario', data)
  })
  
  ;
}


}
