import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, NavigationStart, Event as NavigationEvent, ActivatedRoute } from '@angular/router';
 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { TokenService } from 'src/app/services/token.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})




export class AddProductoComponent implements OnInit {
  public archivos : any =[];
  public previsualizacion!: string;
  archivoCapturado: any;

   data :FormData=new FormData();

  lstCategoria: Categoria[] =[];

  
    producto:Producto={
      categoria: {
        id_categoria: 0
      },
      usuario: {
        idUsuario:0
      }
     
    }
  
    
    constructor(private sanitizer: DomSanitizer,private categoriaService: CategoriaService,private ProductoService:ProductoService,
      ///////validaciones
      private formBuilder: FormBuilder,
       private httpClient: HttpClient
      ,private tokenService: TokenService,private activatedRoute: ActivatedRoute,private router: Router,private http: HttpClient
      ) { 
 
    
    uploadForm: FormGroup; 
    


   this.categoriaService.listaCategoria().subscribe(
               categoria =>this.lstCategoria=categoria);
  }
  
/////////////////////declarar validaciones
forms: FormGroup = this.formBuilder.group({
  nom_pro:['',[ Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
  categoria:['',[ Validators.required]],
  marca:['',[ Validators.required,Validators.pattern('[a-zA-Z0-9]{3,30}')]],
  descripcion:['',[ Validators.required,Validators.pattern('[a-zA-Z0-9]{3,40}')]],
  direccion:['',[ Validators.required,Validators.pattern('[a-zA-Z0-9]{3,25}')]],
  condicion:['',[ Validators.required]],
  precio:['',[Validators.required,Validators.pattern('[^a-z]')]],
  file:['',[ Validators.required]]
})


///////////
submitted = false;


  registra(){
   
    
      this.producto.usuario!.idUsuario=parseInt(this.tokenService.getUserID())     
      
     
    this.ProductoService.registraProducto(this.producto).subscribe(
      reponse => {
        
        console.log(reponse.mensaje);
        alert(reponse.mensaje);
        this.router.navigate(['addIndex'])
      },
      
      error =>{
        console.log(error);
      },
 
    )
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

   console.log(nombres)
  //  let archivonombre = file.name
  //  this.producto.img1=nombresarchivos
    
   //this.data.append("imagenes",event.target.files[0])
   //console.log(this.data)
  //  this.data.append("files",(new Blob([JSON.stringify(event.target.files[0])], {type: 'application/json'})));
  //  console.log(this.data.get("files"))
  }
 
  ngOnInit(): void {
   
    
  }
  
}
// onFileSelected(event: any){
//   this.archivoCapturado = event.target.files[0];
//   console.log('img',event);
//   (this.archivoCapturado).then((imagen :any)=>{
//     this.previsualizacion = imagen.base; 
//    })
//  this.archivos.push(this.archivoCapturado);
//  console.log(event.target.files)

// } 
 

 //blobFile = async ($event: any|void) => new Promise((resolve, reject) => {
   // try {
  //    const unsafeImg = window.URL.createObjectURL($event);
    //  const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    //  const reader = new FileReader();
    //  reader.readAsDataURL($event);
    //  reader.onload = () => {
     //   resolve({
       //   blob: $event,
        //  image,
       //   base: reader.result
      //  });
     // };
    //  reader.onerror = error => {
     //   resolve({
      //    blob: $event,
     //     image,
        //  base: null
     //   });
   //   };

   // } catch (e) {
   //   return null;
   // }
 // })
//}
