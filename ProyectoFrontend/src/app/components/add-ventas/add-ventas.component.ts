import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/models/compras.model';
import { DetalleCompra } from 'src/app/models/detalle-compra.model';
import { Pedido } from 'src/app/models/pedido.model';
import { CompraService } from 'src/app/services/compra.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-ventas',
  templateUrl: './add-ventas.component.html',
  styleUrls: ['./add-ventas.component.css']
})
export class AddVentasComponent implements OnInit {
 

  // compra: Compras = { 
  //   idCompras:0,
  //   fecha:"",
  //   direccion:"",
  //   pais:"",
  //   distrito:"",
  //   provincia:"",
  //   codigoPostal:"",
  //   usuario:{
  //     idUsuario: 0,
  //   },
  //   estado:1,
  //   monto:0,
  //   nombreProducto:""
  // }

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


  idUsuario: number=0;
  listaPedidoporUsuario: Pedido[] = [];  


  
  constructor(private comprasService: CompraService,private tokenService: TokenService) { }
  getEstado(aux:number):string{
    return aux ==1 ? "Pagado" : "Entregado";
  }

  getTextoBotonEstado(aux:number):string{
    return aux ==1 ? "Entregado" : "Pagado";
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
  


}
