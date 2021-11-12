import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categoria-industrias',
  templateUrl: './lista-categoria-industrias.component.html',
  styleUrls: ['./lista-categoria-industrias.component.css']
})
export class ListaCategoriaIndustriasComponent implements OnInit {
  
  listaProductosIndu: Producto[] = [];  

    idCategoria=8
 

  constructor(private ProductoService:ProductoService) { }
 

  listarProductosIndustria(){

    this.ProductoService.listarProductoCategorias(this.idCategoria).subscribe(
      reponse => {
        console.log("ListoIndustrias");
        this.listaProductosIndu = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }

  ngOnInit(): void {
    this.listarProductosIndustria();
  }

}
