import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8095/rest/registraUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}
  create(data:Usuario):Observable<any> {
         return this.http.post(baseUrl,data)
      }
}
