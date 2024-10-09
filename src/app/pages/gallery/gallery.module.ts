import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { BreadcrumbModule, CallToActionModule } from '@components';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [
		GalleryComponent
	],
	imports: [
		CommonModule,
		GalleryRoutingModule,
		BreadcrumbModule,
		CallToActionModule,
		NgxPaginationModule
	]
})
export class GalleryModule { }
