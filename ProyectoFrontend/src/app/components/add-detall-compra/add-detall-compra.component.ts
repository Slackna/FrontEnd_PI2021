import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-add-detall-compra',
  templateUrl: './add-detall-compra.component.html',
  styleUrls: ['./add-detall-compra.component.css']
})
export class AddDetallCompraComponent implements OnInit {
 
   
  
  constructor(private ProductoService:ProductoService,private tokenService: TokenService,private activatedRoute: ActivatedRoute,private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
   }
  productodetalle: Producto = new Producto;
  listaGeneral:Producto[] =[]
  listarProductosGeneral(){

    this.ProductoService.lista().subscribe(
      reponse => {
        console.log("ListoGeneral");
        this.listaGeneral = reponse;
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
 
 
  ngOnInit() {
    this.listarProductosGeneral();
    this.obtienePorId();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
   
    
  }

}
