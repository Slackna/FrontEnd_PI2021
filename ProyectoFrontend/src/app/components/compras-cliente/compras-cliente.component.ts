import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/models/compras.model';
import { CompraService } from 'src/app/services/compra.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-compras-cliente',
  templateUrl: './compras-cliente.component.html',
  styleUrls: ['./compras-cliente.component.css']
})
export class ComprasClienteComponent implements OnInit {
  idUsuario: number=0;
  listaComprasporUsuario: Compras[] = [];  
  constructor(private comprasService: CompraService,private tokenService: TokenService) { }


  getEstado(aux:number):string{
    return aux ==1 ? "Pagado" : "Enviado";
  }

  getTextoBotonEstado(aux:number):string{
    return aux ==1 ? "Enviado" : "Pagado";
  }
  listarComprasxUsuario(){
    this.idUsuario=parseInt(this.tokenService.getUserID())
    this.comprasService.listarComprasPorUsuario(this.idUsuario).subscribe(
      reponse => {
        console.log("ListoProductos",);
        this.listaComprasporUsuario = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }
  ngOnInit(): void {
    this.listarComprasxUsuario();
  }

}
