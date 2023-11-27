import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooComponent } from './foo/foo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    FooComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],

  exports:[
    FooComponent,
    NavComponent
  ]
})
export class SharedModule { }
