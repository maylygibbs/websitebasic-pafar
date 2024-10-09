import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { HomeService } from '../home.service';
declare var $: any;
declare var Plyr: any;

@Component({
  selector: 'app-home-alt3',
  templateUrl: './home-alt3.component.html',
  styleUrls: ['./home-alt3.component.scss']
})
export class HomeAlt3Component implements OnInit {
	public data: any = null;
	public baseURL: string = environment.baseUrl;
	public priceListDataFirst:any;
	public priceListDataCenter:any[] = [];
	public priceListDataLast:any;

	constructor(
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
			this.homeService.fetchTestimonial();
			this.homeService.fetchPopularPost();

			setTimeout(()=>{
				$('.js-owl-clients').owlCarousel({
					loop:true,
					nav:true,
					dots:false,
					autoplay:true,
					autoplaySpeed:1500,
					autoplayTimeout:20000,
					navSpeed:1500,
					responsive:{
						0:{
							margin:15,
							items:1
						},
						767:{
							margin:30,
							items:3
						},
						991:{
							margin:30,
							items:3
						},
						1025:{
							margin:60,
							items:4
						},
						1200:{
							margin:60,
							items:5
						}
					}
				})
			}, 1000);
		}
	}

	// ============================ //
	// Fetch Home Data
	// ============================ //
	fetchData(){
		this.mainService.getHome3Content().subscribe((res:any)=>{
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
