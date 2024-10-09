import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment  } from '@environments';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	public baseUrl: string = environment.baseUrl;

	constructor(
		public mainService: MainService,
	) {
	}

	ngOnInit(): void {
	}

}
