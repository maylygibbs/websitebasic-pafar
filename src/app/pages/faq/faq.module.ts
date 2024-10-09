import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { BreadcrumbModule, CallToActionModule } from '@components';
import { MainPipeModule } from '@pipes';

@NgModule({
	declarations: [
		FaqComponent
	],
	imports: [
		CommonModule,
		FaqRoutingModule,
		BreadcrumbModule,
		CallToActionModule,
		MainPipeModule
	]
})
export class FaqModule { }
