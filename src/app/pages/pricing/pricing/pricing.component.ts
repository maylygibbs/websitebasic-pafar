import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
	public title: string = "";
	public priceListDataFirst:any;
	public priceListDataCenter:any[] = [];
	public priceListDataLast:any;
	
	constructor(
        private mainService: MainService
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
		this.fetchData();
	}

	// ================== //
	// Fetch Data Pricing
	// ================== //
	fetchData(){
		this.mainService.getPricingContent().subscribe((res:any)=>{
			this.title = res['data']['attributes']['Title'];
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

			this.mainService.updateMetaTitle("Pricing");
		});
	}
}
