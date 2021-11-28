import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';

import { AddVendedorComponent } from './components/add-vendedor/add-vendedor.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddIndexComponent } from './components/add-index/add-index.component';
import { AddLoginComponent } from './components/add-login/add-login.component';
import { MenuComponent } from './menu/menu.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { ListaCategoriaElectrodomesticosComponent } from './components/lista-categoria-electrodomesticos/lista-categoria-electrodomesticos.component';
import { ListaCategoriaIndustriasComponent } from './components/lista-categoria-industrias/lista-categoria-industrias.component';
import { ListaCategoriaConstruccionComponent } from './components/lista-categoria-construccion/lista-categoria-construccion.component';
import { ListaCategoriaDeportesComponent } from './components/lista-categoria-deportes/lista-categoria-deportes.component';
import { ListaCategoriaHogarmueblesComponent } from './components/lista-categoria-hogarmuebles/lista-categoria-hogarmuebles.component';
import { ListadoCategoriaTecnologiaComponent } from './components/listado-categoria-tecnologia/listado-categoria-tecnologia.component';
import { ListaCategoriaBellezaYCuidadoPersonalComponent } from './components/lista-categoria-belleza-ycuidado-personal/lista-categoria-belleza-ycuidado-personal.component';
import { ListaCategoriaHerramientasComponent } from './components/lista-categoria-herramientas/lista-categoria-herramientas.component';
import { ListaCategoriaBebesComponent } from './components/lista-categoria-bebes/lista-categoria-bebes.component';
import { ListaCategoriJuguetesComponent } from './components/lista-categori-juguetes/lista-categori-juguetes.component';
import { AddDetallCompraComponent } from './components/add-detall-compra/add-detall-compra.component';
import { AddPerfilUsuarioComponent } from './components/add-perfil-usuario/add-perfil-usuario.component';
import { AddCompraComponent } from './components/add-compra/add-compra.component';
import { FilterPipe } from './filter.pipe';
import { Filter2Pipe } from './filter2.pipe';
import { Filter3Pipe } from './filter3.pipe';
import { AddPublicacionesUsuarioComponent } from './components/add-publicaciones-usuario/add-publicaciones-usuario.component';
import { ComprasClienteComponent } from './components/compras-cliente/compras-cliente.component';
import { CommonModule } from '@angular/common';  
/////importar esta vaina
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVentasComponent } from './components/add-ventas/add-ventas.component';
import { AddFacturaComponent } from './components/add-factura/add-factura.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    AddVendedorComponent,
    AddProductoComponent,
    AddIndexComponent,
    AddLoginComponent,
    MenuComponent,
    ListaCategoriaElectrodomesticosComponent,
    ListaCategoriaIndustriasComponent,
    ListaCategoriaConstruccionComponent,
    ListaCategoriaDeportesComponent,
    ListaCategoriaHogarmueblesComponent,
    ListadoCategoriaTecnologiaComponent,
    ListaCategoriaBellezaYCuidadoPersonalComponent,
    ListaCategoriaHerramientasComponent,
    ListaCategoriaBebesComponent,
    ListaCategoriJuguetesComponent,
    AddDetallCompraComponent,
    AddPerfilUsuarioComponent,
    AddCompraComponent,
    FilterPipe,
    Filter2Pipe,
    Filter3Pipe,
    AddPublicacionesUsuarioComponent,
    ComprasClienteComponent,
    AddVentasComponent,
    AddFacturaComponent,
    EstadisticasComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})

  ],
 
  providers: [interceptorProvider],
  bootstrap: [AppComponent],


  
})
export class AppModule { 


  
}
