import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { ServiceRoutingModule } from './service-routing.module';
import { BreadcrumbModule, SectionColumnModule, CallToActionModule } from '@components';
import { MainPipeModule } from '@pipes';

@NgModule({
	declarations: [
		ServiceComponent
	],
	imports: [
		CommonModule,
		ServiceRoutingModule,
		BreadcrumbModule,
		SectionColumnModule,
		CallToActionModule,
		MainPipeModule
	],
	exports: [
		ServiceComponent
	]
})
export class ServiceModule { }
