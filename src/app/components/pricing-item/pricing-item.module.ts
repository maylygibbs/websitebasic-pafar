import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingGridComponent } from './pricing-grid/pricing-grid.component';
import { PricingColumnComponent } from './pricing-column/pricing-column.component';

@NgModule({
	declarations: [
		PricingGridComponent,
		PricingColumnComponent
	],
	imports: [
		CommonModule
	], 
	exports:[
		PricingGridComponent,
		PricingColumnComponent
	]
})
export class PricieItemModule { }
