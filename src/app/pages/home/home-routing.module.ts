import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAlt1Component } from './home-alt1/home-alt1.component';
import { HomeAlt2Component } from './home-alt2/home-alt2.component';
import { HomeAlt3Component } from './home-alt3/home-alt3.component';
import { HomeAlt4Component } from './home-alt4/home-alt4.component';
import { HomeAlt5Component } from './home-alt5/home-alt5.component';
import { HomeAlt6Component } from './home-alt6/home-alt6.component';
import { HomeAlt7Component } from './home-alt7/home-alt7.component';
import { HomeAlt8Component } from './home-alt8/home-alt8.component';
import { MainHomeComponent } from './main-home/main-home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeAlt1Component
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
