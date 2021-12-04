import { Component, OnInit } from '@angular/core';
import { Reclamo } from 'src/app/models/reclamo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './add-contacto.component.html',
  styleUrls: ['./add-contacto.component.css']
})
export class AddContactoComponent implements OnInit {
 
  //
  listaUsuario: Usuario[]=[];

  reclamoss: Reclamo = { 
    idReclamo:0,
    descripcion: "",
    estado:0,
    nombre:"",
    email:"",
    usuario:{
      idUsuario:0,
    },
    
   
    
   };

  constructor(private reclamoService: ReclamoService, private usuarioService: UsuarioService,private tokenService: TokenService) { }

  ngOnInit(): void {
    
  }

  registra(){
  
   

    this.reclamoss.estado = 1;
   this.reclamoss.usuario!.idUsuario=parseInt(this.tokenService.getUserID())
  this.reclamoService.registra(this.reclamoss).subscribe(
      response =>{
            //2 envío el mensaje
            console.log(response.mensaje);
            alert(response.mensaje);
            //4 limpio el formulario actualizando el json
            this.reclamoss= { 
              idReclamo:0,
              descripcion: "",
              estado:0,
              nombre:"",
              email:"",
              usuario:{
                idUsuario:0,
              },
            }   
      },
      error => {
          console.log(error);
      },
  );

}

}
