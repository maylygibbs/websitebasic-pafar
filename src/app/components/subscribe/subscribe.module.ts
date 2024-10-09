import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SubscribeSingleComponent } from './subscribe-single/subscribe-single.component';
import { SubscribeService } from './subscribe.service';
import { SubscribeSectionComponent } from './subscribe-section/subscribe-section.component';

@NgModule({
	declarations: [
		SubscribeSingleComponent,
    	SubscribeSectionComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule
	], 
	exports:[
		SubscribeSingleComponent,
		SubscribeSectionComponent
	],
	providers:[
		SubscribeService
	]
})
export class SubscribeModule { }
