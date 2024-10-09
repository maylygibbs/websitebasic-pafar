import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { HomeService } from '../home.service';
declare var $: any;

@Component({
  selector: 'app-home-alt8',
  templateUrl: './home-alt8.component.html',
  styleUrls: ['./home-alt8.component.scss']
})
export class HomeAlt8Component implements OnInit {
	public data:any = null;
	public baseUrl:string = environment.baseUrl;
	public priceListDataFirst:any;
	public priceListDataCenter:any[] = [];
	public priceListDataLast:any;
	
	constructor(
		private mainService: MainService,
		public homeService: HomeService
	) { 
		this.mainService.isInnerPage = false;
		this.mainService.isDemoPage = false;
		this.mainService.isHeaderWhite = true;
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
		this.mainService.getHome8Content().subscribe((res:any)=>{
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
				$(".js-video-button").modalVideo({
					channel: 'youtube',
					youtube:{
						autoplay: 1
					}
				});
			}
		});
	}
}
