import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
declare var $: any;

@Component({
  selector: 'blog-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.scss']
})
export class PostGridComponent implements OnInit {
	@Input() categories: any[] = [];
	@Input() title: string = "";
	@Input() coverImage: string = "";
	@Input() avatar: string = "";
	@Input() user: string = "";
	@Input() date: string = "";
	@Input() pageLink: string = "";

	public commentCounter: number = 0;

	constructor(
		private mainService: MainService
	) { }

	ngOnInit(): void {
	}

	ngAfterViewInit(){
		if(this.mainService.isBrowser){
			setTimeout(()=>{
				// =========================== //
				// JQuery Match Height
				// =========================== //
				$('.js-match-height').matchHeight();
	
				// =========================== //
				// Fetch Comment Counter
				// =========================== //
				if(this.pageLink){
					this.mainService.fetchCounterComments(environment.hostURL + this.pageLink).subscribe((resComment:any)=>{
						this.commentCounter = resComment['response'].length ? resComment['response'][0]['posts'] : 0;
					});
				}
			});
		}
	}

}
