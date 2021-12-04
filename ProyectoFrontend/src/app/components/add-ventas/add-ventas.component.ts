import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Compras } from 'src/app/models/compras.model';
import { DetalleCompra } from 'src/app/models/detalle-compra.model';
import { Pedido } from 'src/app/models/pedido.model';
import { Reclamo } from 'src/app/models/reclamo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CompraService } from 'src/app/services/compra.service';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-ventas',
  templateUrl: './add-ventas.component.html',
  styleUrls: ['./add-ventas.component.css']
})
export class AddVentasComponent implements OnInit {
 
  reclamoss:Reclamo[] = [];
  filtro2: string="";

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
  usuario2: Usuario[] = [];

  nombreUsuario = '';
  nombreUsuario1 = '';
  nombre2 = '';
  email1= '';
  isLogged = false;
  isAdmin = false;
  roles!: string[];
  idUsuario: number=0;
  categorias: Categoria[] = [];
  filtro: string = "";
  categoria: Categoria = {
    id_categoria: 0,
    nombre: "",
    
  }
  listaPedidoporUsuario: Pedido[] = [];  
  listaComprasporUsuario: Compras[] = []; 
 usuario:Usuario={
   idUsuario: parseInt(this.tokenService.getUserID()),
 }
 reclamo: Reclamo = { 
  idReclamo: 0,
  descripcion: "",
  estado:0,
  nombre:"",
  email:"",
  usuario:{
    idUsuario:parseInt(this.tokenService.getUserID())
  },
  
 
  
 };


  
  constructor(private comprasService: CompraService,private tokenService: TokenService,private usuarioService:UsuarioService, private categoriaService: CategoriaService,private reclamoService: ReclamoService,private router: Router) { }
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
    this.consultareclamos();
    this.listarVentasxUsuario();
    this.listarComprasxUsuario();
    if (this.tokenService.getToken()!="{}") {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    
    } else {
      this.isLogged = false;
    }
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
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
  actualiza(){
    
    console.log(this.usuario);
  
    this.usuarioService.actualiza(this.usuario).subscribe(
      response =>{
              //1 envío el mensaje
              console.log(response.mensaje);
              alert(response.mensaje);
              this.usuario={
                idUsuario: parseInt(this.tokenService.getUserID()),
                
              }
              
        },
        error => {
            console.log(error);
        },
    );
  
  }
  consultaCliente(){
    this.usuarioService.consulta1(this.nombre2,this.nombreUsuario1,this.email1).subscribe(
      response => this.usuario2 = response.lista
    );
  }

  consulta() {
    console.log(" ==> consulta ==> filtro ==> " + this.filtro);

    var varFiltro: string = this.filtro == "" ? "todos" : this.filtro;
    this.categoriaService.consulta(varFiltro).subscribe(
      response => this.categorias = response
    );
  }
  registra() {
    console.log(this.categorias);


    this.categoriaService.registra(this.categoria).subscribe(
      response => {
        //2 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //3 atualizo la grilla
        var varFiltro: string = this.filtro == "" ? "todos" : this.filtro;
        this.categoriaService.consulta(varFiltro).subscribe(
          response => this.categorias = response
        );

        //4 limpio el formulario actualizando el json
        this.categoria = {
          id_categoria: 0,
          nombre: "",
        }
      },
      error => {
        console.log(error);
      },
    );
  }
  busca(aux: Categoria) {

    //Actualiza el json con el registro seleccionado en la grila
    this.categoria = aux;

  }

  actualizaCate() {

    console.log(this.categoria);

    this.categoriaService.actualiza(this.categoria).subscribe(
      response => {
        //1 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //2 atualizo la grilla
        var varFiltro: string = this.filtro == "" ? "todos" : this.filtro;
        this.categoriaService.consulta(varFiltro).subscribe(
          response => this.categorias = response
        );

        //3 limpio el formulario actualizando el json
        this.categoria = {
          id_categoria: 0,
          nombre: "",
        }
      },
      error => {
        console.log(error);
      },
    );

  }
  borrar(id: number) {
    this.categoriaService.eliminar(id).subscribe(
      response => {
        console.log(response.mensaje)

        this.consulta();
        alert(response.mensaje);
      },

      error => {
        console.log(error);
      },


    );



  }

  consultareclamos(){
    console.log(" ==> consulta ==> filtro ==> " + this.filtro);
    
     var varFiltro:string =  this.filtro == "" ? "todos" :  this.filtro; 
     this.reclamoService.consulta(varFiltro).subscribe(
         response => this.reclamoss = response
     );

  }
 
  buscaReclamo(aux:Reclamo){
    console.log(" ==> busca ==> id ==> " + aux.idReclamo);
    console.log(" ==> busca ==> nombre ==> " + this.reclamo.idReclamo);
    
    //Actualiza el json con el registro seleccionado en la grila
    
  
  }

  actualizaReclamo(){

    console.log(this.reclamo);
    this.reclamoService.actualizaRclamo(this.reclamo).subscribe(
      response =>{
              //1 envío el mensaje
              console.log(response.mensaje);
              alert(response.mensaje);
  
               //2 atualizo la grilla
              var varFiltro:string =  this.filtro == "" ? "todos" :  this.filtro; 
              this.reclamoService.consulta(varFiltro).subscribe(
                response => this.reclamoss = response
              );
              this.reclamo = {
                idReclamo: 0,
                descripcion: "",
              }
               
        },
        error => {
            console.log(error);
        },
    );
  
  }
  borrarReclamo(idReclamo: number) {
    this.reclamoService.delete(idReclamo).subscribe(
      response =>{ console.log(response.mensaje)
        
        this.consultareclamos;
        alert(response.mensaje);
      },
      
      error => {
        console.log(error);
   
  
    },
    );
    }

}
