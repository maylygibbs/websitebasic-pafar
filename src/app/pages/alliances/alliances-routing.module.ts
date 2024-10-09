import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlliancesComponent } from './alliances/alliances.component';

const routes: Routes = [
  {
    path: '',
    component: AlliancesComponent
}
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlliancesRoutingModule { }
