import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideImageComponent } from './aside-image/aside-image.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AsideImageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedComponentsModule { }
