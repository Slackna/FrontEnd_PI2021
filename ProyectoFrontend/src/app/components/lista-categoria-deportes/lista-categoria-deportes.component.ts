import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categoria-deportes',
  templateUrl: './lista-categoria-deportes.component.html',
  styleUrls: ['./lista-categoria-deportes.component.css']
})
export class ListaCategoriaDeportesComponent implements OnInit {
  listaProductos: Producto[] = [];  

    idCategoria=4

  constructor(private ProductoService:ProductoService) { }
  listarProductosxCategoria(){

    this.ProductoService.listarProductoCategorias(this.idCategoria).subscribe(
      reponse => {
        console.log("ListoDeportes");
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
