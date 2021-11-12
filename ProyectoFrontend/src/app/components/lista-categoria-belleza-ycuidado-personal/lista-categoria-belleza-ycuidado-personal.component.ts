import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categoria-belleza-ycuidado-personal',
  templateUrl: './lista-categoria-belleza-ycuidado-personal.component.html',
  styleUrls: ['./lista-categoria-belleza-ycuidado-personal.component.css']
})
export class ListaCategoriaBellezaYCuidadoPersonalComponent implements OnInit {

  listaProductos: Producto[] = [];  
 
    idCategoria=5

  constructor(private ProductoService:ProductoService) { }

  listarProductosxCategoria(){

    this.ProductoService.listarProductoCategorias(this.idCategoria).subscribe(
      reponse => {
        console.log("ListoBellezayCuidado");
        this.listaProductos = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }

  ngOnInit(): void {
    this.listarProductosxCategoria();
  }


}
