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
  

  constructor(private ProductoService:ProductoService) { }
  listarProductosxCategoriaTec(){

    this.ProductoService.listarProductoCategorias(this.idCategoria).subscribe(
      reponse => {
        console.log("ListoTecnologia");
        this.listaProductosTec = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }

  ngOnInit(): void {
    this.listarProductosxCategoriaTec();
  }

}
