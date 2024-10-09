import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionColumnComponent } from './section-column.component';

@NgModule({
	declarations: [
  		SectionColumnComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		SectionColumnComponent
	],
})
export class SectionColumnModule { }
