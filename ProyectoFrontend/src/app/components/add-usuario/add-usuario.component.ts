import { Component, OnInit } from '@angular/core'; 
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css'],
})
export class AddUsuarioComponent implements OnInit {
  constructor(private usuarioService:UsuarioService,
    private formBuilder: FormBuilder
    ,private router: Router) 
    { }



usuario: Usuario={ };

/////////////////declara validaciones
forms: FormGroup = this.formBuilder.group({

  nombre : ['',[Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
  paterno : ['',[Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
  materno : ['',[Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
  dni : ['',[Validators.required,Validators.pattern('[0-9]{8}')]],
  direccion : ['',[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
  celular : ['',[Validators.required,Validators.pattern('[0-9]{9}')]],
  nombreusuario : ['',[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
  nombreusuarioc : ['',[Validators.required,Validators.email]],
  password : ['',[Validators.required]]   


})


//////////
submitted = false;

   saveUsuario(){
    

    ///////////////
    this.submitted = true;
    ////////////


    //////
    if(this.forms.invalid){

      return;
    }
    ///////////

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
              this.router.navigate(['addLogin'])
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