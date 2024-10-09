import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import { HomeService } from '../home.service';
declare var $: any;

@Component({
  selector: 'app-home-alt2',
  templateUrl: './home-alt2.component.html',
  styleUrls: ['./home-alt2.component.scss']
})
export class HomeAlt2Component implements OnInit {
	public baseUrl: string = environment.baseUrl;
	public data:any;

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
			this.homeService.fetchBrands();
			this.homeService.fetchTestimonial();
			this.homeService.fetchPopularPost();
		}
	}

	// ============================ //
	// Fetch Home Data
	// ============================ //
	fetchData(){
		this.mainService.getHome2Content().subscribe((res:any)=>{
			this.data = res['data']['attributes'];
			this.mainService.updateMetaPage(this.data['SEO']);

			// ================== //
			// JS Layout Init
			// ================== //
			if(this.mainService.isBrowser){
				setTimeout(()=>{
					$(".js-video-button").modalVideo({
						channel: 'youtube',
						youtube:{
							autoplay: 1
						}
					});
				}, 1000);
			}
		});
	}
}
