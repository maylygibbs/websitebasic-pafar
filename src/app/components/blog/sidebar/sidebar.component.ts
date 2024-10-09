import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments';
import { MainService } from '@services';
import { BlogShareService } from '../blog-share.service';

@Component({
  selector: 'blog-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	public baseUrl: string = environment.baseUrl;
	public categories:any[] = [];
	public tags:any[] = [];
	public popularPost:any[] = [];
	public categorySlug: string = "";
	public tagSlug: string = "";
	public queryParam: any = null;
	public path: string = "/blog";

	constructor(
		public blogShareService: BlogShareService,
		private route: ActivatedRoute,
		private mainService: MainService
	) {
		this.route.queryParams.subscribe((p:any) => {
			this.queryParam = p;
		});
	}

	ngOnInit(): void {
		//this.getDataCategories();
		//this.getDataTags();
		//this.getPopularPost();
		//this.blogShareService.fetchBlogInfo();
	}

	// ========================== //
	// Fetch Blog Categories
	// ========================== //
	getDataCategories(){
		this.blogShareService.fetchCategories().subscribe((res:any)=>{
			this.categories = res['data'];
		});
	}

	// ========================== //
	// Fetch Blog Tags
	// ========================== //
	getDataTags(){
		this.blogShareService.fetchTags().subscribe((res:any)=>{
			this.tags = res['data'];
		});
	}

	// ========================== //
	// Fetch Blog Popular Post
	// ========================== //
	getPopularPost(){
		this.mainService.getPopularPost().subscribe((res:any)=>{
			this.popularPost = res['data'];
		});
	}
}
