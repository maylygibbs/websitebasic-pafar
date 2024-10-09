import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { BlogShareService } from '../blog-share.service';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
	@Input() categories: any[] = [];
	@Input() title: string = "";
	@Input() coverImage: string = "";
	@Input() avatar: string = "";
	@Input() user: string = "";
	@Input() path: string = "";
	@Input() date: string = "";
	@Input() sortDescription: string = "";
	@Input() tags: any[] = [];
	@Input() pageLink: string = "";

	public commentCounter: number = 0;
	
	constructor(
		private mainService: MainService
	) { }

	ngOnInit(): void {
		// =========================== //
		// Fetch Comment Counter
		// =========================== //
		if(this.pageLink){
			this.mainService.fetchCounterComments(environment.hostURL + this.pageLink).subscribe((resComment:any)=>{
				this.commentCounter = resComment['response'].length ? resComment['response'][0]['posts'] : 0;
			});
		}
	}

}
