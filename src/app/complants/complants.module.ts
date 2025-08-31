import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComplantsRoutingModule } from './complants-routing.module';
import { ComplantListComponent } from './complant-list/complant-list.component';
import { NewComplantsComponent } from './new-complants/new-complants.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    ComplantListComponent,
    NewComplantsComponent
  ],
  imports: [
    CommonModule,
    ComplantsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    ButtonModule 
  ]
})
export class ComplantsModule { }
