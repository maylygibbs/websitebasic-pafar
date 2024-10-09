import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlliancesRoutingModule } from './alliances-routing.module';
import { AlliancesComponent } from './alliances/alliances.component';
import { BreadcrumbModule } from '../../components/breadcrumb/breadcrumb.module';
import { SectionColumnModule } from '../../components/section-column/section-column.module';
import { MainPipeModule } from '../../pipes/main-pipe.module';


@NgModule({
  declarations: [
    AlliancesComponent
  ],
  imports: [
    CommonModule,
    AlliancesRoutingModule,
		BreadcrumbModule,
		SectionColumnModule,
    MainPipeModule
  ]
})
export class AlliancesModule { }
