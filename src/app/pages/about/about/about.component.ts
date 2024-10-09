import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
declare var $: any;

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public data: any = null;
    public teams: any[] = [];
    public loading: boolean = true;
    public baseUrl: string = environment.baseUrl;
    
	constructor(
        private mainService: MainService
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
        this.fetchData();
        this.fetchTeams();
	}   

	ngAfterViewInit(){
       
	}

    // ============================== //
    // Fetch Data About Page
    // ============================== //
    fetchData(){
        this.mainService.getAboutContent().subscribe((res:any)=>{
            this.data = res['data']['attributes'];
            this.loading = false;
            this.mainService.updateMetaPage(this.data['SEO']);
        });
    }

    // ============================== //
    // Fetch Data Teams
    // ============================== //
    fetchTeams(){
        this.mainService.getTeams().subscribe((res:any)=>{
            this.teams = res['data'];            
            if(this.mainService.isBrowser){
                setTimeout(()=>{
                    $('.js-owl-team').owlCarousel({
                        loop:true,
                        nav:true,
                        dots:false,
                        autoplay:false,
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
                                items:2
                            },
                            991:{
                                margin:30,
                                items:2
                            },
                            1025:{
                                margin:60,
                                items:3
                            },
                            1200:{
                                margin:30,
                                items:3
                            }
                        }
                    })
                }, 1000);
            }
        });
    }
}
