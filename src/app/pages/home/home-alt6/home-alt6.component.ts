import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { HomeService } from '../home.service';

declare var $: any;
declare var Plyr: any;

@Component({
  selector: 'app-home-alt6',
  templateUrl: './home-alt6.component.html',
  styleUrls: ['./home-alt6.component.scss']
})
export class HomeAlt6Component implements OnInit {
	public data:any = null;
	public baseUrl:string = environment.baseUrl;
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
			this.homeService.fetchBrands();
			this.homeService.fetchTestimonial();
			this.homeService.fetchPopularPost();			
		}
	}

	// ============================ //
	// Fetch Home Data
	// ============================ //
	fetchData(){
		this.mainService.getHome6Content().subscribe((res:any)=>{
			this.data = res['data']['attributes'];

			this.priceListDataFirst = res['data']['attributes']['Pricing'].find((x:any)=> x.PricePosition == 'first');
			this.priceListDataFirst.btnStyle = "btn-default";
			if(this.priceListDataFirst.PriceColor == "blue") this.priceListDataFirst.btnStyle = "btn-primary"; 
			if(this.priceListDataFirst.PriceColor != "blue" && this.priceListDataFirst.PriceColor != null) this.priceListDataFirst.btnStyle = "btn-" + this.priceListDataFirst.PriceColor; 
			
			this.priceListDataLast = res['data']['attributes']['Pricing'].find((x:any)=> x.PricePosition == 'last');
			this.priceListDataLast.btnStyle = "btn-default";
			if(this.priceListDataLast.PriceColor == "blue") this.priceListDataLast.btnStyle = "btn-primary"; 
			if(this.priceListDataLast.PriceColor != "blue" && this.priceListDataLast.PriceColor != null) this.priceListDataLast.btnStyle = "btn-" + this.priceListDataLast.PriceColor; 

			this.priceListDataCenter = res['data']['attributes']['Pricing'].filter((x:any)=> x.PricePosition == 'center');
			this.priceListDataCenter.map((x:any)=>{
				x.btnStyle = "btn-default";
				if(x.PriceColor == "blue") x.btnStyle = "btn-primary"; 
				if(x.PriceColor != "blue" && x.PriceColor != null) x.btnStyle = "btn-" + x.PriceColor; 
			});

			this.mainService.updateMetaPage(this.data['SEO']);

			// ================== //
			// JS Layout Init
			// ================== //
			if(this.mainService.isBrowser){
				const player = new Plyr('#player');
				
				setTimeout(()=>{
					$('.js-owl-features').owlCarousel({
						loop:true,
						nav:false,
						dots:false,
						autoplay:true,
						margin:40,
						autoplaySpeed:1500,
						autoplayTimeout:9000,
						items:5,
						responsive:{
							0:{
								items:1
							},
							767:{
								items:2
							},
							991:{
								items:3
							},
							1025:{
								items:4
							},
							1200:{
								items:4
							}
						}
					});

					window.dispatchEvent(new Event('resize'));
				}, 1000);
			}
		});
	}
}
