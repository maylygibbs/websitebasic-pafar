import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimoniComponent } from './testimoni/testimoni.component';
import { TestimoniRoutingModule } from './testimoni-routing.module';
import { BreadcrumbModule, CallToActionModule } from '@components';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [
		TestimoniComponent
	],
	imports: [
		CommonModule,
		TestimoniRoutingModule,
		BreadcrumbModule,
		CallToActionModule,
		NgxPaginationModule
	]
})
export class TestimoniModule { }
