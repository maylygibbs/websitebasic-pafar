import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
declare var smoothScripts: any;
declare var $: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

	constructor(
		private mainService: MainService
	) { 
		this.mainService.isDemoPage = true;
		this.mainService.isInnerPage = false;
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(){
		if(this.mainService.isBrowser){
			smoothScripts.animateLinkScroll();
			$('.js-match-height').matchHeight();
			setTimeout(()=>{
				window.dispatchEvent(new Event('resize'));
			}, 1000);
		}
	}
}
