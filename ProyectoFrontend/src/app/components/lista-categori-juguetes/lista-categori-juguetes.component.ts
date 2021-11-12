import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categori-juguetes',
  templateUrl: './lista-categori-juguetes.component.html',
  styleUrls: ['./lista-categori-juguetes.component.css']
})
export class ListaCategoriJuguetesComponent implements OnInit {
  listaProductos: Producto[] = [];  
 
    idCategoria=9
 
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
