import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
	@Input() text: string = "";
	@Input() link: string = "";

	constructor() { }

	ngOnInit(): void {
	}

}
