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
   
    registra(aux:Categoria):Observable<any>{
      return this.http.post<any>(baseUrl+"/registraMarca",aux);
  }
  
  actualiza(aux:Categoria):Observable<any>{
      return this.http.put<any>(baseUrl+"/actualizaMarca",aux);
  }
  eliminar(id:number):Observable<any>{
    return this.http.delete<any>(baseUrl + "/delete/" + id);
  }
  
  consulta(filtro:string):Observable<Categoria[]>{
    return this.http.get<Categoria[]>(baseUrl+ "/listaMarcaPorNombreLike/" +filtro );
}

}
