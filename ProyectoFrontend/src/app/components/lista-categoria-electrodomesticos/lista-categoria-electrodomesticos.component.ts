import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categoria-electrodomesticos',
  templateUrl: './lista-categoria-electrodomesticos.component.html',
  styleUrls: ['./lista-categoria-electrodomesticos.component.css']
})
export class ListaCategoriaElectrodomesticosComponent implements OnInit {

  listaProductos2: Producto[] = [];  
  
    idCategoria2=2
    
    
 
  constructor(private ProductoService:ProductoService) {

   }

   listarProductosxCategoria1(){

    this.ProductoService.listarProductoCategorias(this.idCategoria2).subscribe(
      reponse => {
        console.log("ListoElectrodomesticos");
        this.listaProductos2 = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }
 

  ngOnInit(): void {
    this.listarProductosxCategoria1();
  }

}
