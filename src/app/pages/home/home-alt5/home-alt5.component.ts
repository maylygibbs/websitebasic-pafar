import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { HomeService } from '../home.service';

declare var $: any;
declare var smoothScripts: any;
declare var Plyr: any;

@Component({
  selector: 'app-home-alt5',
  templateUrl: './home-alt5.component.html',
  styleUrls: ['./home-alt5.component.scss']
})
export class HomeAlt5Component implements OnInit {
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
		this.homeService.fetchBrands();
			this.homeService.fetchTestimonial();
	}

	ngAfterViewInit(){
		// ================== //
		// JS Layout Init
		// ================== //
		if(this.mainService.isBrowser){
			smoothScripts.tabNavigation();

			$('a[data-toggle="tab"]').on('shown.bs.tab', function () {
				$('.tab-pane img').removeAttr('height');
				$('.tab-pane img').removeAttr('width');
			});

			const player = new Plyr('#player');
			setTimeout(()=>{
				window.dispatchEvent(new Event('resize'));
			}, 500);
		}
	}

	// ============================ //
	// Fetch Home Data
	// ============================ //
	fetchData(){
		this.mainService.getHome5Content().subscribe((res:any)=>{
			this.data = res['data']['attributes'];

			this.priceListDataFirst = res['data']['attributes']['PriceSection'].find((x:any)=> x.PricePosition == 'first');
			this.priceListDataFirst.btnStyle = "btn-default";
			if(this.priceListDataFirst.PriceColor == "blue") this.priceListDataFirst.btnStyle = "btn-primary"; 
			if(this.priceListDataFirst.PriceColor != "blue" && this.priceListDataFirst.PriceColor != null) this.priceListDataFirst.btnStyle = "btn-" + this.priceListDataFirst.PriceColor; 
			
			this.priceListDataLast = res['data']['attributes']['PriceSection'].find((x:any)=> x.PricePosition == 'last');
			this.priceListDataLast.btnStyle = "btn-default";
			if(this.priceListDataLast.PriceColor == "blue") this.priceListDataLast.btnStyle = "btn-primary"; 
			if(this.priceListDataLast.PriceColor != "blue" && this.priceListDataLast.PriceColor != null) this.priceListDataLast.btnStyle = "btn-" + this.priceListDataLast.PriceColor; 

			this.priceListDataCenter = res['data']['attributes']['PriceSection'].filter((x:any)=> x.PricePosition == 'center');
			this.priceListDataCenter.map((x:any)=>{
				x.btnStyle = "btn-default";
				if(x.PriceColor == "blue") x.btnStyle = "btn-primary"; 
				if(x.PriceColor != "blue" && x.PriceColor != null) x.btnStyle = "btn-" + x.PriceColor; 
			});

			this.mainService.updateMetaPage(this.data['SEO']);
		});
	}
}
