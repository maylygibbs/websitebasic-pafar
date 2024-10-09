import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from './sanitize-html';

@NgModule({
	declarations: [
		SanitizeHtmlPipe
	],
	imports: [
		CommonModule
	],
	exports:[
		SanitizeHtmlPipe
	]
})
export class MainPipeModule { }
