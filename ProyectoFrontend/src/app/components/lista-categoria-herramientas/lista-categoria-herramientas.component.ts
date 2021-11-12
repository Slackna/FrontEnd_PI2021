import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categoria-herramientas',
  templateUrl: './lista-categoria-herramientas.component.html',
  styleUrls: ['./lista-categoria-herramientas.component.css']
})
export class ListaCategoriaHerramientasComponent implements OnInit {
  listaProductos: Producto[] = [];  
 
    idCategoria=6
 

  constructor(private ProductoService:ProductoService) { }

  listarProductosxCategoria(){

    this.ProductoService.listarProductoCategorias(this.idCategoria).subscribe(
      reponse => {
        console.log("ListoHerramientas");
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
