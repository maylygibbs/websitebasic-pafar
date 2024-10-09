import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-right-sidebar',
  templateUrl: './blog-right-sidebar.component.html',
  styleUrls: ['./blog-right-sidebar.component.scss']
})
export class BlogRightSidebarComponent implements OnInit {
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
