import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIndexComponent } from './components/add-index/add-index.component';
import { AddLoginComponent } from './components/add-login/add-login.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddVendedorComponent } from './components/add-vendedor/add-vendedor.component';



const routes: Routes = [
  {path:"addUsuario", component:AddUsuarioComponent },
  {path:"addVendedor2", component:AddVendedorComponent },
  {path:"addProducto", component:AddProductoComponent},
  {path:"addIndex", component:AddIndexComponent},
  {path:"addLogin", component:AddLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
