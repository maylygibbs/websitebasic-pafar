import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '@services';


@Component({
  selector: 'team-item',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
	@Input() avatar: string = "";
	@Input() name: string = "";
	@Input() title: string = "";
	@Input() facebookLink: string = "";
	@Input() twitterkLink: string = "";
	@Input() linkEdinkLink: string = "";
	@Input() className: string = "";

	constructor(
		private mainService: MainService
	) { }

	ngOnInit(): void {
	}

	ngAfterViewInit(){
		
	}
}
