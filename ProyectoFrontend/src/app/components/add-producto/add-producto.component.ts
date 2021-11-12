import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, NavigationStart, Event as NavigationEvent, ActivatedRoute } from '@angular/router';
 
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})




export class AddProductoComponent implements OnInit {
  public archivos : any =[];
  public previsualizacion!: string;
  codigoUsuario?:number =0;

  lstCategoria: Categoria[] =[];
    producto:Producto={
        categoria:{
          id_categoria: 0
        }
    }
  
    
    constructor(private sanitizer: DomSanitizer,private categoriaService: CategoriaService,private ProductoService:ProductoService,private formBuilder: FormBuilder, private httpClient: HttpClient
      ,private tokenService: TokenService,private activatedRoute: ActivatedRoute,private router: Router
      ) { 
 
    
    uploadForm: FormGroup; 
    


   this.categoriaService.listaCategoria().subscribe(
               categoria =>this.lstCategoria=categoria);
  }
  


  registra(){
    this.obtenerId(this.tokenService.getUserName()).subscribe(
      reponse => {
        console.log(reponse[0].idUsuario);
        this.codigoUsuario=reponse[0].idUsuario
      },
      error =>{
        console.log(error);
      },

    );

    this.archivos.forEach((item: any) => {
    this.blobFile(item).then((res: any) => {
        this.producto.img1 = res.base;
      })
    });
    this.producto.idUsuario=this.codigoUsuario;
      this.ProductoService.registraProducto(this.producto).subscribe(
      reponse => {
        console.log(reponse.mensaje);
        alert(reponse.mensaje);
      },
      error =>{
        console.log(error);
      },

    )
  }

  obtenerId(nombre:string){
    return this.ProductoService.getUserId(nombre);
  }
  ngOnInit(): void {
    
  }

  onFileSelected(event: any){
      const archivoCapturado = event.target.files[0];
      this.blobFile(archivoCapturado).then((imagen :any)=>{
        this.previsualizacion = imagen.base; 
       })
      this.archivos.push(archivoCapturado);
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