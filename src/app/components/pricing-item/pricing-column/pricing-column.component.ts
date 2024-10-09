import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pricing-column',
  templateUrl: './pricing-column.component.html',
  styleUrls: ['./pricing-column.component.scss']
})
export class PricingColumnComponent implements OnInit {
	@Input() color: string = "";
	@Input() fontAwesomIcon: string = "";
	@Input() title: string = "";
	@Input() price: number = 0;
	@Input() id: string = "";
	@Input() className: string = "";
	@Input() currency: string = "$";
	@Input() priceList: any[] = [];

	constructor() { }

	ngOnInit(): void {
		this.id = this.makeid(5);
	}

	// ================================= //
	// Generate ID for Modal Bootstrap
	// ================================= //
	makeid(length: number) {
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
}
