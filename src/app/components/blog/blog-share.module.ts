import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostGridComponent } from './post-grid/post-grid.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { BlogShareService } from './blog-share.service';
import { BlogFullComponent } from './blog-full/blog-full.component';

@NgModule({
	declarations: [
  		SidebarComponent,
		PostGridComponent,
		PostListComponent,
  		BlogFullComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports:[
		SidebarComponent,
		PostGridComponent,
		PostListComponent,
		BlogFullComponent
	],
	providers: [BlogShareService]
})
export class BlogShareModule { }
