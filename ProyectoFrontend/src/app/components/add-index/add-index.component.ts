import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { Producto } from 'src/app/models/producto.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-index',
  templateUrl: './add-index.component.html',
  styleUrls: ['./add-index.component.css']
})
export class AddIndexComponent implements OnInit {
 

  listaGeneral:Producto[] =[]
  isLogged = false;
  nombreUsuario = '';

  

  constructor(private ProductoService:ProductoService,private tokenService: TokenService,private activatedRoute: ActivatedRoute,private router: Router) { }

  listarProductosGeneral(){

    this.ProductoService.lista().subscribe(
      reponse => {
        this.listaGeneral = reponse;
        console.log(this.listaGeneral);
      },
      error =>{
        console.log(error);
      },  
    )  
  }
  

  ngOnInit() {
    this.listarProductosGeneral();
    if  (this.tokenService.getToken() !="{}")  {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}

