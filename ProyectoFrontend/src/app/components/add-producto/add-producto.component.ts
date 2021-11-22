import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, NavigationStart, Event as NavigationEvent, ActivatedRoute } from '@angular/router';
 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
      ,private tokenService: TokenService,private activatedRoute: ActivatedRoute,private router: Router
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
   

    this.archivos.forEach((item: any) => {
    this.blobFile(item).then((res: any) => {
        this.producto.img1 = res.base;
      })
    });
 
      this.producto.uploadfile= this.archivoCapturado;
      this.producto.usuario!.idUsuario=parseInt(this.tokenService.getUserID())
      console.log('producto',this.producto)
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

 
  ngOnInit(): void {
    
  }

  onFileSelected(event: any){
      this.archivoCapturado = event.target.files[0];
      console.log('img',event)
      this.blobFile(this.archivoCapturado).then((imagen :any)=>{
        this.previsualizacion = imagen.base; 
       })
      this.archivos.push(this.archivoCapturado);
      console.log(event.target.files)
   
  } 

 blobFile = async ($event: any|void) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })
}