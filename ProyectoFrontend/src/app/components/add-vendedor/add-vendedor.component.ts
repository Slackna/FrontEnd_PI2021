import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioVendedorService } from 'src/app/services/usuario-vendedor.service';
@Component({
  selector: 'app-add-vendedor',
  templateUrl: './add-vendedor.component.html',
  styleUrls: ['./add-vendedor.component.css']
})
export class AddVendedorComponent implements OnInit {

  constructor(private vendedorService:UsuarioVendedorService,
    private formBuilder: FormBuilder,private router:Router)  { }

    usuario: Usuario= { } 
  

  /////////////////declara validaciones
forms: FormGroup = this.formBuilder.group({

  ruc : ['',[ Validators.required, Validators.pattern('[0-9]{11}')]],
  razon_social : ['',[ Validators.required, Validators.pattern('[a-zA-Z]{3,50}]')]],
  nombreUsuario : ['',[ Validators.required,Validators.pattern('[a-zA-Z]{3,30}]')]],
  password : ['',[ Validators.required]],
  direccion : ['',[ Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
  email : ['',[ Validators.required,Validators.email]],
  celular : ['',[ Validators.required,Validators.pattern('[0-9]{9}')]],
 
  
})




  //////////
submitted = false;




    saveVendedor(){

     ///////////////
     this.submitted = true;
     ////////////
 
 
     //////
     if(this.forms.invalid){
 
       return;
     }
     ///////////
 
      this.vendedorService.create(this.usuario).subscribe(
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
