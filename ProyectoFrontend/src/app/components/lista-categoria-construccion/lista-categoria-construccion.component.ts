import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categoria-construccion',
  templateUrl: './lista-categoria-construccion.component.html',
  styleUrls: ['./lista-categoria-construccion.component.css']
})
export class ListaCategoriaConstruccionComponent implements OnInit {

  listaProductos: Producto[] = [];  
  
    idCategoria=7

  constructor(private ProductoService:ProductoService) { }
 

  listarProductosxCategoria(){

    this.ProductoService.listarProductoCategorias(this.idCategoria).subscribe(
      reponse => {
        console.log("ListoConstruccion");
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
