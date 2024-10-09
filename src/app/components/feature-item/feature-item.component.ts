import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {
	@Input() iconImage: string = "";
	@Input() title: string = "";
	@Input() description: string = "";
	@Input() link: string = "";

	constructor() { }

	ngOnInit(): void {
	}

}
