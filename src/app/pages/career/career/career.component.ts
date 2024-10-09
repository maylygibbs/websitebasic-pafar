import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
	public listData: any[] = [];
	public baseUrl: string = environment.baseUrl;
	
	constructor(
        private mainService: MainService
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
		this.fetchData();
	}

    // ===================== //
    // Fetch Career Data
    // ===================== //
	fetchData(){
        this.mainService.getCareerContent().subscribe((res:any)=>{
            this.listData = res['data'];
            this.mainService.updateMetaTitle("Career");
        });
    }

}
