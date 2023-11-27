import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ProductosComponent,
    DetallesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],

  exports:[
    ProductosComponent,
  ]
})
export class PagesModule { }
