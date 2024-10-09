import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pricing-grid',
  templateUrl: './pricing-grid.component.html',
  styleUrls: ['./pricing-grid.component.scss']
})
export class PricingGridComponent implements OnInit {
	@Input() color: string = "";
	@Input() buttonStyle: string = "";
	@Input() fontAwesomIcon: string = "";
	@Input() title: string = "";
	@Input() price: number = 0;
	@Input() currency: string = "$";
	@Input() id: string = "";
	@Input() className: string = "";
	@Input() priceList: any[] = [];

	constructor() { }

	ngOnInit(): void {
	}

}
