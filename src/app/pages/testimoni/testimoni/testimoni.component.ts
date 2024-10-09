import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';

@Component({
  selector: 'app-testimoni',
  templateUrl: './testimoni.component.html',
  styleUrls: ['./testimoni.component.scss']
})
export class TestimoniComponent implements OnInit {
	public data: any[] = [];
	public loading: boolean = false;
	public page: number = 1;
	public itemsPerPage: number = 9;
	public total: number = 0;
	public baseUrl: string = environment.baseUrl;

	constructor(
        private mainService: MainService
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
		this.fetchData(this.page, this.itemsPerPage);
	}

	// ======================== //
	// Fetch Data Testimonials
	// ======================== //
	fetchData(page: number, itemsPerPage: number){
		this.loading = true;
		this.mainService.getTestimonialContent(page, itemsPerPage).subscribe((res:any)=>{
			this.data = res['data'];
			this.total = res['meta']['pagination']['total'];
			this.loading = false;
			this.mainService.updateMetaTitle("Testimonials");

			if(this.mainService.isBrowser){
				window.scrollTo(0, 0);
			}
		});
	}

	// ======================== //
	// Page Change
	// ======================== //
	pageChange(e: number){
		if(!this.loading){
			this.page = e;
			this.fetchData(this.page, this.itemsPerPage);
		}
	}
}
