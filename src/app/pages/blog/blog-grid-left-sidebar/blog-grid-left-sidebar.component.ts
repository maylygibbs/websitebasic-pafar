import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-grid-left-sidebar',
  templateUrl: './blog-grid-left-sidebar.component.html',
  styleUrls: ['./blog-grid-left-sidebar.component.scss']
})
export class BlogGridLeftSidebarComponent implements OnInit {
	public baseUrl: string = environment.baseUrl;

	constructor(
        public mainService: MainService,
		public blogService: BlogService,
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
		this.mainService.updateMetaTitle("Blog");
	}
}
