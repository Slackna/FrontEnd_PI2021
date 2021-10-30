import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AddVendedorComponent } from './components/add-vendedor/add-vendedor.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddIndexComponent } from './components/add-index/add-index.component';
import { AddLoginComponent } from './components/add-login/add-login.component';
import { MenuComponent } from './menu/menu.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    AddVendedorComponent,
    AddProductoComponent,
    AddIndexComponent,
    AddLoginComponent,
    MenuComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   

  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],


  
})
export class AppModule { 


  
}
