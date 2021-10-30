import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';


const baseUrl = "http://localhost:8095/util";
@Injectable({
  providedIn: 'root'
})
export class CategoriaService{

  constructor(private http:HttpClient) { }



    listaCategoria():Observable<Categoria[]>{

       return this.http.get<Categoria[]>(baseUrl+"/listaCategoria");
    }
  

}
