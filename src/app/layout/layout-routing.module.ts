import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
 {path:"",component:LayoutsComponent,
  children:[
  {
    path:"dashboard",
    loadChildren:()=>import('../dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path:"complants",
    loadChildren:()=>import('../complants/complants.module').then((m)=>m.ComplantsModule)
  },
  {
    path:"department",
    loadChildren:()=>import('../department/department.module').then((m)=>m.DepartmentModule)
  }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
