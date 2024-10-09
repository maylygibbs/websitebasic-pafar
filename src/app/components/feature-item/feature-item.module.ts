import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureItemComponent } from './feature-item.component';

@NgModule({
	declarations: [
		FeatureItemComponent
	],
	imports: [
		CommonModule
	], 
	exports:[
		FeatureItemComponent
	]
})
export class FeatureItemModule { }
