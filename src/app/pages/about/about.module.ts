import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { BreadcrumbModule, SectionColumnModule, CallToActionModule, TeamItemModule } from '@components';
import { MainPipeModule } from '@pipes';

@NgModule({
	declarations: [
		AboutComponent
	],
	imports: [
		CommonModule,
		AboutRoutingModule,
		BreadcrumbModule,
		SectionColumnModule,
		CallToActionModule,
		TeamItemModule,
		MainPipeModule
	],
	exports: [
		AboutComponent
	]
})
export class AboutModule { }
