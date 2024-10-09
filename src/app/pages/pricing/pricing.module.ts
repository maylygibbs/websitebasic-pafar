import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { BreadcrumbModule, CallToActionModule, PricieItemModule } from '@components';

@NgModule({
  	declarations: [
		PricingComponent
	],
	imports: [
		CommonModule,
		PricingRoutingModule,
		BreadcrumbModule,
		CallToActionModule,
		PricieItemModule
	]
})
export class PricingModule { }
