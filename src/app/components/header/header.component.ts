import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';

declare var smoothScripts: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@ViewChild('btnClose') public btnClose?: ElementRef<any>;

	public baseUrl: string = environment.baseUrl;

	constructor(
		public mainService: MainService,
	) {
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(){
		// ====================== //
		// Init Layout 
		// ====================== //
		if(this.mainService.isBrowser){
			smoothScripts.navigation();
			smoothScripts.scroll();
		}
	}

	closeMenu(){
		this.btnClose?.nativeElement.click();
	}

}
