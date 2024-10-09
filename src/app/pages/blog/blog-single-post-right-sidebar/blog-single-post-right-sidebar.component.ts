import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-single-post-right-sidebar',
  templateUrl: './blog-single-post-right-sidebar.component.html',
  styleUrls: ['./blog-single-post-right-sidebar.component.scss']
})
export class BlogSinglePostRightSidebarComponent implements OnInit {
	public hostUrl: string = environment.hostURL;
	public baseUrl: string = environment.baseUrl;
	public uuid: string = "";
	public slug: string = "";
	public comments: any[] = [];
	public commentCount: number = 0;

	constructor(
        private mainService: MainService,
		public blogService: BlogService,
		private route: ActivatedRoute
    ) { 
        this.mainService.isInnerPage = true;

		this.route.params.subscribe((params:any) => {
			// ============================ //
			// Fetch Single 
			// ============================ //
			this.slug = params['slug_uid'].split("_")[0];
			this.uuid = params['slug_uid'].split("_")[1];
			this.blogService.fetchSingleData(this.slug,this.uuid);
		});
    }

	ngOnInit(): void {
	}
}
