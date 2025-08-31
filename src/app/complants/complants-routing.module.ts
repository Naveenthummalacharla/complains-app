import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplantListComponent } from './complant-list/complant-list.component';
import { NewComplantsComponent } from './new-complants/new-complants.component';

const routes: Routes = [
  {
    path:"",
    component:ComplantListComponent
  },
  {
    path:"newcomplant",
    component:NewComplantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplantsRoutingModule { }
