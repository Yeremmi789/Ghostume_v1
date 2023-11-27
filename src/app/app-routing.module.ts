import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    // path:'/productos',
    path:'productos',
    component: ProductosComponent,
  },
  {
    path:'Detalles/:id',
    component:DetallesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
