import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '@services';
import { environment } from '@environments';
import * as moment from 'moment';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
	public popularPost: any[] = [];
	public brands: any[] = [];
	public testimonials:any[] = [];

	constructor(
		private mainService: MainService,
		private http: HttpClient
	) { }

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

	// ================== //
	// Fetch Popular Ppost
	// ================== //
	fetchPopularPost(){
		this.mainService.getPopularPost().subscribe((res:any)=>{
			this.popularPost = res['data'];
			this.popularPost.map((x:any)=>{
				x.attributes['DisplayDate'] = moment(x.attributes.publishedAt,"YYYY-MM-DD'T'HH:mm:ss.SSS'Z'").format("DD MMM YYYY");
			});
			
			if(this.mainService.isBrowser){
				setTimeout(()=>{
					$('.js-owl-article').owlCarousel({
						loop:true,
						nav:false,
						dots:true,
						autoplay:true,
						responsiveClass:true,
						autoplaySpeed:1500,
						autoplayTimeout:18000,
						navSpeed:1500,
						responsive:{
							0:{
								slideBy:1,
								margin:0,
								items:1
							},
							991:{
								slideBy:2,
								margin:30,
								items:2
							}
						}
					});

					$('.js-owl-fullwidth').owlCarousel({
						loop:true,
						margin:0,
						nav:true,
						dots:false,
						autoplay:true,
						autoplaySpeed:1500,
						autoplayTimeout:9000,
						navSpeed:1500,
						items:3,
						responsive:{
							0:{
								items:1
							},
							767:{
								items:2
							},
							991:{
								items:2
							},
							1025:{
								items:3
							},
							1200:{
								items:3
							}
						}
					});
				}, 1000);
			}
		});
	}

	// ================== //
	// Fetch Testimonilas
	// ================== //
	fetchTestimonial(){
		this.mainService.getTestimonialContent(1, 5).subscribe((res:any)=>{
			this.testimonials = res['data'];

			if(this.mainService.isBrowser){
				setTimeout(()=>{
					$('.js-owl-testimoni').owlCarousel({
						loop:true,
						margin:0,
						nav:false,
						dots:true,
						autoplay:true,
						autoplaySpeed:1500,
						autoplayTimeout:12000,
						navSpeed:1500,
						items:1
					});
				}, 1000);
			}
		});
	}
}
