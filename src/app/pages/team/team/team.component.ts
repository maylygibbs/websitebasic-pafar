import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
	public baseUrl: string = environment.baseUrl;
	public teams: any[] = [];

	constructor(
        private mainService: MainService
    ) { 
		this.mainService.isInnerPage = true;
	}

	ngOnInit(): void {
		this.fetchTeams();
	}

	ngAfterViewInit(){}

	// ======================== //
	// Fetch Data Teams
	// ======================== //
	fetchTeams(){
        this.mainService.getTeams().subscribe((res:any)=>{
            this.teams = res['data'];
			this.mainService.updateMetaTitle("Team");

			if(this.mainService.isBrowser){
				$('.js-match-height').matchHeight();

				setTimeout(()=>{
					window.dispatchEvent(new Event('resize'));
				}, 1000);	
			}
        });
    }

}
