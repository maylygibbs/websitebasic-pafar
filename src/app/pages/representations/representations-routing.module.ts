import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentationsComponent } from './representations/representations.component';

const routes: Routes = [
  {
    path:'',
    component: RepresentationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentationsRoutingModule { }
