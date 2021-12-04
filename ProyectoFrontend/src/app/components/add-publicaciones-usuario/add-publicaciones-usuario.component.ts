import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-publicaciones-usuario',
  templateUrl: './add-publicaciones-usuario.component.html',
  styleUrls: ['./add-publicaciones-usuario.component.css']
})
export class AddPublicacionesUsuarioComponent implements OnInit {

  data :FormData=new FormData();

  productos: Producto [] = [];
  producto:Producto={
    categoria: {
      id_categoria: 0
    },
    usuario: {
      idUsuario:0
    }
   
  }
  lstCategoria: Categoria[] =[];


  listaProductosporUsuario: Producto[] = [];  
  idUsuario: number=0;
  constructor(private ProductoService:ProductoService,private tokenService: TokenService,private categoriaService: CategoriaService) { 
    this.categoriaService.listaCategoria().subscribe(
      categoria =>this.lstCategoria=categoria);
  }
  listarProductosxUsuario(){
    this.idUsuario=parseInt(this.tokenService.getUserID())
    this.ProductoService.listarProductoUsuario(this.idUsuario).subscribe(
      reponse => {
        console.log("ListoProductos");
        this.listaProductosporUsuario = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
  }

  borrar(idProducto: number) {
    this.ProductoService.eliminar(idProducto).subscribe(
      response =>{ console.log(response.mensaje)
        alert(response.mensaje);
        this.listarProductosxUsuario();
      },
      
      error => {
        console.log(error);
    },
  
  
    );
     
     
  
  }
  actualiza(){
   
    console.log(this.producto);
  
    this.ProductoService.actualiza(this.producto).subscribe(
      response =>{
              //1 envío el mensaje
              console.log(response.mensaje);
              alert(response.mensaje);
  
               //2 atualizo la grilla
               var idUsuario=parseInt(this.tokenService.getUserID())
              this.ProductoService.listarProductoUsuario(idUsuario).subscribe(
                response => this.productos = response
              );
              this.producto={
                categoria: {
                  id_categoria: 0
                },
                usuario: {
                  idUsuario:0
                }
               
              }
               //3 limpio el formulario actualizando el json
              
        },
        error => {
            console.log(error);
        },
    );
  
  }
  busca(aux:Producto){
    
    //Actualiza el json con el registro seleccionado en la grila
    this.producto = aux;
  
  }
  prueba(event :any) {

    let file=event.target.files[0]
    let nombresarchivos=""
    let nombres=""
    
    for (let i = 0; i < event.target.files.length; i++){
 
       nombresarchivos =nombresarchivos+ event.target.files[i].name 
       
       this.data.append("files", event.target.files[i])
       this.producto.img1=nombresarchivos
       this.ProductoService.registraImagenes(this.data).subscribe(
         error=>{
           event.preventDefault()
           console.log(error)
         },
       )
    }
  } 

  ngOnInit(): void {
    this.listarProductosxUsuario();
  }

}
