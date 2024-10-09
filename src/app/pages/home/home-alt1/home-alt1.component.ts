import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MainService } from '@services';
import { environment } from '@environments';
import { HomeService } from '../home.service';
declare var $: any;
declare var bootstrap: any;

@Component({
	selector: 'app-home-alt1',
	templateUrl: './home-alt1.component.html',
	styleUrls: ['./home-alt1.component.scss']
})
export class HomeAlt1Component implements OnInit {
	public list:any[] = [];
	public data:any;
	public priceListDataFirst:any;
	public priceListDataCenter:any[] = [];
	public priceListDataLast:any;
	public baseUrl: string = environment.baseUrl;
	public email: string = '';

	constructor(
		private metaTagService: Meta,
		private title: Title,
		private mainService: MainService,
		public homeService: HomeService
	) { 
		this.mainService.isInnerPage = false;
		this.mainService.isDemoPage = false;
		this.mainService.isHeaderWhite = false;
	}

	ngOnInit(): void {
		this.fetchData();
	}

	ngAfterViewInit(){
		if(this.mainService.isBrowser){
			this.homeService.fetchBrands();
			this.homeService.fetchTestimonial();
			this.homeService.fetchPopularPost();
		}
	}

	// ============================ //
	// Fetch Home Data
	// ============================ //
	fetchData(){
		this.mainService.getHome1Content().subscribe((res:any)=>{
			this.data = res['data']['attributes'];
			this.priceListDataFirst = this.data.Pricing.find((x:any)=> x.PricePosition == 'first');
			this.priceListDataLast = this.data.Pricing.find((x:any)=> x.PricePosition == 'last');
			this.priceListDataCenter = this.data.Pricing.filter((x:any)=> x.PricePosition == 'center');

			this.mainService.updateMetaPage(this.data['SEO']);

			if(this.mainService.isBrowser){
				setTimeout(()=>{
					$('.js-owl-screenshot').owlCarousel({
						loop:true,
						margin:0,
						nav:true,
						dots:false,
						autoplay:true,
						autoplaySpeed:1500,
						autoplayTimeout:8000,
						navSpeed:1500,
						items:1
					});
				}, 1000);
			}
		});
	}	
}