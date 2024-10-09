import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
declare var $: any;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
	public data: any;
	public brands: any[] = [];
	public loading: boolean = true;
	public baseUrl: string = environment.baseUrl;

	constructor(
        private mainService: MainService
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
		this.fetchData();
		this.fetchBrands();
	}

	ngAfterViewInit(){}

	// ================== //
	// Fetch Data Service
	// ================== //
	fetchData(){
        this.mainService.getServiceContent().subscribe((res:any)=>{
            this.data = res['data']['attributes'];
			this.loading = false;
			this.mainService.updateMetaPage(this.data['SEO']);
        });
    }

	// ================== //
	// Fetch Brands
	// ================== //
	fetchBrands(){
        this.mainService.getBrands().subscribe((res:any)=>{
            this.brands = res['data'];

			if(this.mainService.isBrowser){
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
        });
    }

}
