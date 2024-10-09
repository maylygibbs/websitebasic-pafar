import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentationsRoutingModule } from './representations-routing.module';
import { RepresentationsComponent } from './representations/representations.component';
import { BreadcrumbModule } from '../../components/breadcrumb/breadcrumb.module';
import { SectionColumnModule } from '../../components/section-column/section-column.module';
import { MainPipeModule } from '../../pipes/main-pipe.module';


@NgModule({
  declarations: [
    RepresentationsComponent
  ],
  imports: [
    CommonModule,
    RepresentationsRoutingModule,
		BreadcrumbModule,
		SectionColumnModule,
    MainPipeModule
  ]
})
export class RepresentationsModule { }
