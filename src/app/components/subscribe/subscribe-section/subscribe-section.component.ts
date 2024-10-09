import { Component, OnInit, Input } from '@angular/core';
import { SubscribeService } from '../subscribe.service';
import { MainService } from '@services';
declare var bootstrap: any;

@Component({
  selector: 'subscribe-section',
  templateUrl: './subscribe-section.component.html',
  styleUrls: ['./subscribe-section.component.scss']
})
export class SubscribeSectionComponent implements OnInit {
	public email: string = "";
	@Input() title: string = "Let's try it's free trail for 30 days";

	constructor(
		private mainService: MainService,
		public subscribeService: SubscribeService
	) { }

	ngOnInit(): void {
	}

	ngAfterViewInit(){
		// ============================ //
		// Init Toas Element
		// ============================ //
		if(this.mainService.isBrowser){
			this.subscribeService.toastElem = document.getElementById('subscribeToast');
			this.subscribeService.toastAlert = new bootstrap.Toast(this.subscribeService.toastElem);
		}
	}
}
