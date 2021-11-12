import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categoria-hogarmuebles',
  templateUrl: './lista-categoria-hogarmuebles.component.html',
  styleUrls: ['./lista-categoria-hogarmuebles.component.css']
})
export class ListaCategoriaHogarmueblesComponent implements OnInit {
  listaProductos: Producto[] = [];  
  
    idCategoria=3
 

  constructor(private ProductoService:ProductoService) { }
  listarProductosxCategoria(){

    this.ProductoService.listarProductoCategorias(this.idCategoria).subscribe(
      reponse => {
        console.log("ListoHogaryMuebles");
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
