import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';

@Component({
  selector: 'app-main-single-post',
  templateUrl: './main-single-post.component.html',
  styleUrls: ['./main-single-post.component.scss']
})
export class MainSinglePostComponent implements OnInit {

	constructor(
		public mainService: MainService
	) { }

	ngOnInit(): void {
	}

}
