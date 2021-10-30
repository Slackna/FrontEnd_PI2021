import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioVendedorService } from 'src/app/services/usuario-vendedor.service';
@Component({
  selector: 'app-add-vendedor',
  templateUrl: './add-vendedor.component.html',
  styleUrls: ['./add-vendedor.component.css']
})
export class AddVendedorComponent implements OnInit {

  constructor(private vendedorService:UsuarioVendedorService ) { }

    usuario: Usuario= { } 
  
    saveVendedor(){
      this.vendedorService.create(this.usuario).subscribe(
          response =>{
            console.log(response.mensaje);
            alert(response.mensaje)
          },
          error =>{
            console.log(error);
          },
        );
    }


  ngOnInit(): void {
  }

}
