import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

	constructor(
		public mainService: MainService
	) { }

	ngOnInit(): void {
	}

}
