import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSupportComponent } from './section-support/section-support.component';

@NgModule({
	declarations: [
		SectionSupportComponent
	],
	imports: [
		CommonModule
  	],
	exports:[
		SectionSupportComponent
	]
})
export class SectionSupportModule { }
