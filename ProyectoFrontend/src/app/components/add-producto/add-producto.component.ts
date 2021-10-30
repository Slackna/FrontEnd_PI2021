import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {


   lstCategoria: Categoria[] =[];
   producto:Producto={
        categoria:{
          id_categoria: 0
        }
   }
  constructor(private categoriaService: CategoriaService,private ProductoService:ProductoService) { 

   this.categoriaService.listaCategoria().subscribe(
               categoria =>this.lstCategoria=categoria);
  }

  registra(){
  this.ProductoService.registraProducto(this.producto).subscribe(
    reponse => {
      console.log(reponse.mensaje);
      alert(reponse.mensaje);
    },
    error =>{
      console.log(error);
    },

  )
  }

  ngOnInit(): void {
  }

}
