import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/models/compras.model';
import { DetalleCompra } from 'src/app/models/detalle-compra.model';
import { Pedido } from 'src/app/models/pedido.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CompraService } from 'src/app/services/compra.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-ventas',
  templateUrl: './add-ventas.component.html',
  styleUrls: ['./add-ventas.component.css']
})
export class AddVentasComponent implements OnInit {
 


  pedido: Pedido = { 
    idPedido:0,
    fecha:"",
    detalle:{
     idCompras:0,
     estado:1,
    },
    usuario:{
      idUsuario: 0,
    },
  }
  nombreUsuario = '';
  isLogged = false;
  idUsuario: number=0;
  listaPedidoporUsuario: Pedido[] = [];  
  listaComprasporUsuario: Compras[] = []; 
 usuario:Usuario={
   idUsuario: parseInt(this.tokenService.getUserID()),
   
 }


  
  constructor(private comprasService: CompraService,private tokenService: TokenService,private usuarioService:UsuarioService) { }
  getEstado(aux:number):string{
    return aux ==1 ? "Pagado" : "Enviado";
  }

  getTextoBotonEstado(aux:number):string{
    return aux ==1 ? "Enviado" : "Pagado";
  }

  listarVentasxUsuario(){
    this.idUsuario=parseInt(this.tokenService.getUserID())
    this.comprasService.listarPedidoPorUsuario(this.idUsuario).subscribe(
      reponse => {
        console.log("ListoPedidos",);
        this.listaPedidoporUsuario = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }
  ngOnInit(): void {
    this.listarVentasxUsuario();
    this.listarComprasxUsuario();
    if (this.tokenService.getToken()!="{}") {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    
    } else {
      this.isLogged = false;
    }
  }
  actualizaEstado(aux:Compras){
    console.log(" ==> En actualizaEstado() ");
    
    //Cambia el estado
    this.pedido.detalle= aux;
    this.pedido.detalle.estado = (aux.estado==1)? 0 : 1;

    this.comprasService.actualiza(this.pedido.detalle).subscribe(
        response =>{
              console.log(response.mensaje);

              this.comprasService.listarComprasPorUsuario(this.idUsuario).subscribe(
                response => this.pedido.detalle = response
              );
        },
        error => {
            console.log(error);
        },
    );
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
  onLogOut(): void {
    this.tokenService.logOut();
  }
  actualizaContra(aux:Usuario){
    console.log(" ==> En actualizaContra() ");
    
    //Cambia el estado
    this.usuario=aux;
    this.usuarioService.actualiza(this.usuario).subscribe(
        response =>{
              console.log(response.mensaje);
        },
        error => {
            console.log(error);
        },
    );
  }


}
