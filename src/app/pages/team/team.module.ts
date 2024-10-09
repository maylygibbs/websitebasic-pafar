import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { TeamRoutingModule } from './team-routing.module';
import { BreadcrumbModule, CallToActionModule, TeamItemModule } from '@components';

@NgModule({
	declarations: [
		TeamComponent
	],
	imports: [
		CommonModule,
		TeamRoutingModule,
		BreadcrumbModule,
		CallToActionModule,
		TeamItemModule
	]
})
export class TeamModule { }
