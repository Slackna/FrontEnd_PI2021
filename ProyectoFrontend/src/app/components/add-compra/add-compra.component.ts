import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Compras } from 'src/app/models/compras.model';
import { DetalleCompra } from 'src/app/models/detalle-compra.model';
import { Producto } from 'src/app/models/producto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CompraService } from 'src/app/services/compra.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-compra',
  templateUrl: './add-compra.component.html',
  styleUrls: ['./add-compra.component.css']
})
export class AddCompraComponent implements OnInit {

  compras:Compras={
    usuario: {
      idUsuario:0
    }
   
  }
  
  idProducto: number=0;
  productodetalle: Producto = new Producto;
  
   

 

 


  constructor(private sanitizer: DomSanitizer,private categoriaService: CategoriaService,
    ///////validaciones
    private formBuilder: FormBuilder,
     private httpClient: HttpClient
    ,private tokenService: TokenService,private activatedRoute: ActivatedRoute,private router: Router,private compraService:CompraService,private ProductoService:ProductoService) { }




    guardaCompra(){
        this.compras.usuario!.idUsuario=parseInt(this.tokenService.getUserID())
        this.idProducto=this.activatedRoute.snapshot.params.id;
        console.log('producto',this.compras)
        this.compraService.registraCompra(this.compras,this.idProducto).subscribe(
        reponse => {
          console.log(reponse.mensaje);
          alert(reponse.mensaje);
          this.router.navigate(['addComprasCliente'])
        },
        
        error =>{
          console.log(error);
        },
  
      )
    }
   
    obtienePorId(){
      const id = this.activatedRoute.snapshot.params.id;
      this.ProductoService.detail(id).subscribe(
        data => {
          this.productodetalle= data;
        },
        err => {
          (err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
        }
      );
    }
   
  ngOnInit(): void {
    this.obtienePorId();
   
  }

}
