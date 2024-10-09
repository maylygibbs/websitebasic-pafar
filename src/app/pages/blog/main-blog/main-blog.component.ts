import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.scss']
})
export class MainBlogComponent implements OnInit {

	constructor(
		public mainService: MainService
	) { }

	ngOnInit(): void {
	}

}
