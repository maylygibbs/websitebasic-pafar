import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';
import { MainService } from '@services';
declare var bootstrap: any;

@Component({
  selector: 'subscribe-single',
  templateUrl: './subscribe-single.component.html',
  styleUrls: ['./subscribe-single.component.scss']
})
export class SubscribeSingleComponent implements OnInit {
	public email: string = "";

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
