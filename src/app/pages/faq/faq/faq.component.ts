import { Component, OnInit } from '@angular/core';
import { MainService } from '@services'
declare var smoothScripts: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
	public faqs:any[] = [];

	constructor(
        private mainService: MainService
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
		this.fetchData();
	}
	
	ngAfterViewInit(){
		if(this.mainService.isBrowser){
			// ============================ //
			// JS Layout Init Collapse
			// ============================ //
			smoothScripts.collapse();
		}
	}

	// ============================ //
	// Fetch FAQ Data
	// ============================ //
	fetchData(){
		this.mainService.getFAQContent().subscribe((res:any)=>{
			this.faqs = res['data'];
			this.mainService.updateMetaTitle("FAQ");
		});
	}
}
