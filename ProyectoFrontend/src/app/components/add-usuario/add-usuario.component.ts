import { Component, OnInit } from '@angular/core'; 
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css'],
})
export class AddUsuarioComponent implements OnInit {
  constructor(private usuarioService:UsuarioService
    ,private router: Router) 
    { }



usuario: Usuario={ };



   saveUsuario(){
    
     this.usuarioService.create(this.usuario).subscribe(


            response =>{
              if(response.mensaje=="Ese nombre ya existe"){
                 alert(response.mensaje)
              }else if(response.mensaje=="Campos mal puestos o email inválido"){
                alert(response.mensaje)
              } else if(response.mensaje=="Ese email ya existe"){
                alert(response.mensaje)
              }else{
              console.log(response.mensaje);
              alert(response.mensaje),
              this.router.navigate(['addIndex'])
              }
            },
            error =>{
              console.log(error);
              alert("Ha ocurrido un error comuniquese con Atencion al Usuario");
            },
          );
    }
  ngOnInit(): void {
  }

  

  

}

