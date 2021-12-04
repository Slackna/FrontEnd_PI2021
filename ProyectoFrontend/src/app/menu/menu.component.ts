import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Categoria } from '../models/categoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  nombreUsuario = '';
  
  lstCategoria: Categoria[] =[];

  constructor(private tokenService: TokenService,private categoriaService: CategoriaService) { 

    this.categoriaService.listaCategoria().subscribe(
      categoria =>this.lstCategoria=categoria);
  }

  
  

  ngOnInit() {
    if (this.tokenService.getToken()!="{}") {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}