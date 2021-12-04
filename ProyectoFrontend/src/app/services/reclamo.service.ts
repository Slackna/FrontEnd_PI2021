import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamo } from '../models/reclamo.model';

const baseUr = 'http://localhost:8095/reclamo'
@Injectable({
  providedIn: 'root'
})

export class ReclamoService {

  constructor(private http: HttpClient) { }

  consulta(filtro:string): Observable<Reclamo[]>{
    return this.http.get<Reclamo[]>(baseUr+"/listaPorDescripcionLike/" + filtro);  
}
registra(aux:Reclamo):Observable<any>{
return this.http.post<any>(baseUr+"/registraReclamo",aux);
}
actualizaRclamo(aux:Reclamo):Observable<any>{
return this.http.put<any>(baseUr+"/actualizaReclamo",aux);
}
delete(id:number):Observable<any>{
return this.http.delete<any>(baseUr+"/deleteReclamo/"+id )
}
  
}
