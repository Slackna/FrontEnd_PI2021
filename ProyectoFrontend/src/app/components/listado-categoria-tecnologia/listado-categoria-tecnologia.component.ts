import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-categoria-tecnologia',
  templateUrl: './listado-categoria-tecnologia.component.html',
  styleUrls: ['./listado-categoria-tecnologia.component.css']
})
export class ListadoCategoriaTecnologiaComponent implements OnInit {
  listaProductosTec:Producto[] =[]
  idCategoria=1;
  
  filterPost= 0;
  filterPost2= 0;
  filterPost3= 0;


  constructor(private ProductoService:ProductoService) { }
  listarProductosxCategoriaTec(){

    this.ProductoService.listarProductoCategorias(this.idCategoria).subscribe(
      reponse => {
        console.log("ListoTecnologia",this.listaProductosTec);
        this.listaProductosTec = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }


  ngOnInit(): void {
    this.listarProductosxCategoriaTec();
    this.filterPost
    this.filterPost2
    this.filterPost3
  }

}
