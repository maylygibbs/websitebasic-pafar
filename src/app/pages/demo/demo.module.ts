import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { MainRoutingModule } from './demo-routing.module';


@NgModule({
	declarations: [
		DemoComponent
	],
	imports: [
		CommonModule,
		MainRoutingModule
	]
})
export class MainModule { }
