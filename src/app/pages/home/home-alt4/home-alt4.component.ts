import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { HomeService } from '../home.service';
declare var $: any;
declare var Plyr: any;

@Component({
  selector: 'app-home-alt4',
  templateUrl: './home-alt4.component.html',
  styleUrls: ['./home-alt4.component.scss']
})
export class HomeAlt4Component implements OnInit {
	public data: any = null;
	public baseURL: string = environment.baseUrl;
	public priceListDataFirst:any;
	public priceListDataCenter:any[] = [];
	public priceListDataLast:any;
	
	constructor(
		public homeService: HomeService,
		private mainService: MainService
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
			this.homeService.fetchTestimonial();
			this.homeService.fetchBrands();
			this.homeService.fetchPopularPost();
		}
	}

	// ============================ //
	// Fetch Home Data
	// ============================ //
	fetchData(){
		this.mainService.getHome4Content().subscribe((res:any)=>{
			this.data = res['data']['attributes'];
			this.priceListDataFirst = this.data.Pricing.find((x:any)=> x.PricePosition == 'first');
			this.priceListDataLast = this.data.Pricing.find((x:any)=> x.PricePosition == 'last');
			this.priceListDataCenter = this.data.Pricing.filter((x:any)=> x.PricePosition == 'center');

			this.mainService.updateMetaPage(this.data['SEO']);

			// ================== //
			// JS Layout Init
			// ================== //
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
					const player = new Plyr('#player');
				}, 1000);
			}
		});
	}

}
