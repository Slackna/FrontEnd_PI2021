import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';




const baseUrl = 'http://localhost:8095/rest/';
@Injectable({
  providedIn: 'root'
})
export class UsuarioVendedorService {

  constructor(private http: HttpClient) { }
  create(data:Usuario):Observable <any>{
          return this.http.post(baseUrl +"registraUsuario", data);

  }
}
