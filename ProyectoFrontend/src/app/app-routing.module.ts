import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddIndexComponent } from './components/add-index/add-index.component';
import { AddLoginComponent } from './components/add-login/add-login.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddVendedorComponent } from './components/add-vendedor/add-vendedor.component';
import { ListaCategoriJuguetesComponent } from './components/lista-categori-juguetes/lista-categori-juguetes.component';
import { ListaCategoriaBebesComponent } from './components/lista-categoria-bebes/lista-categoria-bebes.component';
import { ListaCategoriaBellezaYCuidadoPersonalComponent } from './components/lista-categoria-belleza-ycuidado-personal/lista-categoria-belleza-ycuidado-personal.component';
import { ListaCategoriaConstruccionComponent } from './components/lista-categoria-construccion/lista-categoria-construccion.component';
import { ListaCategoriaDeportesComponent } from './components/lista-categoria-deportes/lista-categoria-deportes.component';
import { ListaCategoriaElectrodomesticosComponent } from './components/lista-categoria-electrodomesticos/lista-categoria-electrodomesticos.component';
import { ListaCategoriaHerramientasComponent } from './components/lista-categoria-herramientas/lista-categoria-herramientas.component';
import { ListaCategoriaHogarmueblesComponent } from './components/lista-categoria-hogarmuebles/lista-categoria-hogarmuebles.component';
import { ListaCategoriaIndustriasComponent } from './components/lista-categoria-industrias/lista-categoria-industrias.component';
import { ListadoCategoriaTecnologiaComponent } from './components/listado-categoria-tecnologia/listado-categoria-tecnologia.component';
import { AddDetallCompraComponent } from './components/add-detall-compra/add-detall-compra.component';
import { AddPerfilUsuarioComponent } from './components/add-perfil-usuario/add-perfil-usuario.component';
import { AddPublicacionesUsuarioComponent } from './components/add-publicaciones-usuario/add-publicaciones-usuario.component';
import { AddCompraComponent } from './components/add-compra/add-compra.component';
import { ComprasClienteComponent } from './components/compras-cliente/compras-cliente.component';
import { AddVentasComponent } from './components/add-ventas/add-ventas.component';
import { AddFacturaComponent } from './components/add-factura/add-factura.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';





const routes: Routes = [
  {path:"addUsuario", component:AddUsuarioComponent },
  {path:"addVendedor2", component:AddVendedorComponent },
  {path:"addProducto", component:AddProductoComponent},
  {path:"addIndex", component:AddIndexComponent},
  {path:"addLogin", component:AddLoginComponent},
  {path:"addListaCategoriaElectrodomesticos", component:ListaCategoriaElectrodomesticosComponent},
  {path:"addListaCategoriaConstruccion", component:ListaCategoriaConstruccionComponent},
  {path:"addListaCategoriaIndustrias", component:ListaCategoriaIndustriasComponent},
  {path:"addListaCategoriaDeportes", component:ListaCategoriaDeportesComponent},
  {path:"addListaCategoriaMuebles", component:ListaCategoriaHogarmueblesComponent},
  {path:"addListaCategoriaTecnologia", component:ListadoCategoriaTecnologiaComponent},
  {path:"addListaCategoriaBellezayCuidado", component:ListaCategoriaBellezaYCuidadoPersonalComponent},
  {path:"addListaCategoriaHerramientas", component:ListaCategoriaHerramientasComponent},
  {path:"addListaCategoriaBebes", component:ListaCategoriaBebesComponent},
  {path:"addListaCategoriaJuguetes", component:ListaCategoriJuguetesComponent},
  {path:"addComprar/:id", component:AddDetallCompraComponent},
  {path:"addPerfil", component:AddPerfilUsuarioComponent},
  {path:"addPublicaciones", component:AddPublicacionesUsuarioComponent},
  {path:"addCompra/:id", component:AddCompraComponent},
  {path:"addVentas", component:AddVentasComponent},
  {path:"addComprasCliente", component:ComprasClienteComponent},
  {path:"addFactura", component:AddFacturaComponent},
  {path:"addEstadisticas", component:EstadisticasComponent},
  {path: '**', redirectTo: '/addIndex'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
