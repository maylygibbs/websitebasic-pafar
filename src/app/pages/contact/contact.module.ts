import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { BreadcrumbModule, CallToActionModule } from '@components';
import { MainPipeModule } from '@pipes';

@NgModule({
	declarations: [
		ContactComponent
	],
	imports: [
		CommonModule,
		ContactRoutingModule,
		BreadcrumbModule,
		CallToActionModule,
		MainPipeModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		ContactComponent
	]
})
export class ContactModule { }
