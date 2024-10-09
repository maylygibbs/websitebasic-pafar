import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeAlt1Component } from './home-alt1/home-alt1.component';
import { HomeAlt2Component } from './home-alt2/home-alt2.component';
import { HomeAlt3Component } from './home-alt3/home-alt3.component';
import { HomeAlt4Component } from './home-alt4/home-alt4.component';
import { HomeAlt5Component } from './home-alt5/home-alt5.component';
import { HomeAlt6Component } from './home-alt6/home-alt6.component';
import { HomeAlt7Component } from './home-alt7/home-alt7.component';
import { HomeAlt8Component } from './home-alt8/home-alt8.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';

import { SectionColumnModule, CallToActionModule, FeatureItemModule, PricieItemModule, SectionSupportModule, BlogShareModule, SubscribeModule } from "@components";

@NgModule({
	declarations: [
		HomeAlt1Component,
		HomeAlt2Component,
		HomeAlt3Component,
		HomeAlt4Component,
		HomeAlt5Component,
		HomeAlt6Component,
		HomeAlt7Component,
		HomeAlt8Component,
  		MainHomeComponent,
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		HttpClientModule,
		SectionColumnModule,
		CallToActionModule,
		FeatureItemModule,
		PricieItemModule,
		SectionSupportModule,
		BlogShareModule,
		FormsModule,
		SubscribeModule
	],
	providers:[
		HomeService
	]
})
export class HomeModule { }
