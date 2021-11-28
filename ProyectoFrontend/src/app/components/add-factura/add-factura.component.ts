import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, NavigationStart, Event as NavigationEvent, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { DetalleCompra } from 'src/app/models/detalle-compra.model';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-add-factura',
  templateUrl: './add-factura.component.html',
  styleUrls: ['./add-factura.component.css']
})
export class AddFacturaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,private ProductoService:ProductoService,private activatedRoute: ActivatedRoute,private router: Router,private detalleService: CompraService) { }
  lista: DetalleCompra[] = [];
  detalles: DetalleCompra= new DetalleCompra();
  detalle:DetalleCompra={
    idDetalle:0,
    producto:{
      
    },
    compras:{
      idCompras:0
    }
  }
  idCompras=0;
  elista(){
    this.idCompras=this.activatedRoute.snapshot.params.id;
    this.detalleService.lista(this.idCompras).subscribe(
      reponse => {
        console.log("ListoGeneral",this.lista);
        this.lista = reponse;
      },
      error =>{
        console.log(error);
      },  
    )  
    
  }

  ngOnInit(): void {
   this.elista();
  }
 
 
  downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA!, options).then((canvas) => {

      const img = canvas.toDataURL('logo/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }

}
