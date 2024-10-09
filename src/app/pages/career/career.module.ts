import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career/career.component';
import { CareerRoutingModule } from './career-routing.module';
import { BreadcrumbModule, CallToActionModule } from '@components';

@NgModule({
	declarations: [
		CareerComponent
	],
	imports: [
		CommonModule,
		CareerRoutingModule,
		BreadcrumbModule,
		CallToActionModule
	]
})
export class CareerModule { }
