import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-categoria-bebes',
  templateUrl: './lista-categoria-bebes.component.html',
  styleUrls: ['./lista-categoria-bebes.component.css']
})
export class ListaCategoriaBebesComponent implements OnInit {

  listaProductosBebes: Producto[] = [];  
 
    idCategoria10=10
   
  constructor(private ProductoService:ProductoService) { }

  listarProductosBebes(){

    this.ProductoService.listarProductoCategorias(this.idCategoria10).subscribe(
      reponse => {
        console.log("ListoBebes");
        this.listaProductosBebes = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }

  ngOnInit(): void {
    this.listarProductosBebes();
  }
}
