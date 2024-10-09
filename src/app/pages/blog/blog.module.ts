import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { BlogGridLeftSidebarComponent } from './blog-grid-left-sidebar/blog-grid-left-sidebar.component';
import { BlogGridRightSidebarComponent } from './blog-grid-right-sidebar/blog-grid-right-sidebar.component';
import { BlogLeftSidebarComponent } from './blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog-right-sidebar/blog-right-sidebar.component';
import { BlogSinglePostLeftSidebarComponent } from './blog-single-post-left-sidebar/blog-single-post-left-sidebar.component';
import { BlogSinglePostRightSidebarComponent } from './blog-single-post-right-sidebar/blog-single-post-right-sidebar.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { MainSinglePostComponent } from './main-single-post/main-single-post.component';

import { BlogShareModule, BreadcrumbModule, CallToActionModule } from '@components';

import { NgxPaginationModule } from 'ngx-pagination';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogService } from './blog.service';
import { MainPipeModule } from '@pipes';

@NgModule({
	declarations: [
		BlogGridLeftSidebarComponent,
		BlogGridRightSidebarComponent,
		BlogLeftSidebarComponent,
		BlogRightSidebarComponent,
		BlogSinglePostLeftSidebarComponent,
		BlogSinglePostRightSidebarComponent,
  		MainBlogComponent,
    	MainSinglePostComponent
	],
	imports: [
		CommonModule,
		BlogShareModule,
		BreadcrumbModule,
		BlogRoutingModule,
		CallToActionModule,
		NgxPaginationModule,
		MainPipeModule,
		NgxSkeletonLoaderModule
	],
	providers:[
		BlogService
	]
})
export class BlogModule { }
