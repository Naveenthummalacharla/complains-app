import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';


@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MenubarModule,
  ]
})
export class LayoutModule { }
