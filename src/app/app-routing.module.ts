import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/shared-components/login/login.component';
import { RegisterComponent } from './shared/shared-components/register/register.component';
import { authGuard } from './auth.guard';
const routes: Routes = [
  {path:"",
    redirectTo:'/login',
    pathMatch:"full"
   },
   {path:"login", component: LoginComponent },
   {path:"register", component: RegisterComponent },

   {
     canActivate:[authGuard],
     path:"",
     loadChildren : ()=>import('./layout/layout.module').then((m)=>m.LayoutModule),
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
