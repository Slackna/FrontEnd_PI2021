import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-publicaciones-usuario',
  templateUrl: './add-publicaciones-usuario.component.html',
  styleUrls: ['./add-publicaciones-usuario.component.css']
})
export class AddPublicacionesUsuarioComponent implements OnInit {


  listaProductosporUsuario: Producto[] = [];  
  idUsuario: number=0;
  constructor(private ProductoService:ProductoService,private tokenService: TokenService) { }
  listarProductosxUsuario(){
    this.idUsuario=parseInt(this.tokenService.getUserID())
    this.ProductoService.listarProductoUsuario(this.idUsuario).subscribe(
      reponse => {
        console.log("ListoProductos");
        this.listaProductosporUsuario = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }


  ngOnInit(): void {
    this.listarProductosxUsuario();
  }

}
