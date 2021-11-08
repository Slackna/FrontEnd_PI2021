import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { FormBuilder, FormGroup } from '@angular/forms';



const baseUrl = "http://localhost:8095/producto/registraProducto";
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  registraProducto(data:Producto):Observable<any>{
    return this.http.post(baseUrl, data);
  }
}
