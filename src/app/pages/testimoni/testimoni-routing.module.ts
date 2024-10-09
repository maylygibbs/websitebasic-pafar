import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimoniComponent } from './testimoni/testimoni.component';

const routes: Routes = [
    {
        path: '',
        component: TestimoniComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class TestimoniRoutingModule { }
