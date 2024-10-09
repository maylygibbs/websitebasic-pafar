import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';
import { environment } from '@environments';
import * as moment from 'moment';
declare var smoothScripts: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
	public data: any[] = [];
	public dataCategory: any[] = [];
	public baseUrl: string = environment.baseUrl;
	public loading: boolean = false;
	public selectedCategory: any = null;

	public page: number = 1;
	public itemsPerPage: number = 9;
	public total: number = 0;

	constructor(
        private mainService: MainService
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
		this.fetchData(this.page, this.itemsPerPage, this.selectedCategory);
		this.fetchDataCategory();
	}

	ngAfterViewInit(){
	}

	// ============================== //
	// Fetch Gallery Data
	// ============================== //
	fetchData(page: number, itemsPerPage: number, category: any){
		this.loading = true;
		this.mainService.getGalleriesContent(page, itemsPerPage, category ? category.attributes.Slug : null).subscribe((res:any)=>{
			this.data = res['data'];
			this.total = res['meta']['pagination']['total'];
			this.loading = false;
			this.data.map((x)=>{
				x.attributes.DisplayDate = "ASd";
				x.attributes['DisplayDate'] = moment(x.attributes.updatedAt,"YYYY-MM-DD'T'HH:mm:ss.SSS'Z'").format("MMM DD, YYYY");
			});
			this.mainService.updateMetaTitle("Gallery");

			if(this.mainService.isBrowser){
				setTimeout(()=>{
					smoothScripts.gallery();
					window.scrollTo(0, 0);
				}, 100);
			}
		});
	}

	// ============================== //
	// Gallery Pagination on Change
	// ============================== //
	pageChange(e: number){
		if(!this.loading){
			this.page = e;
			this.fetchData(this.page, this.itemsPerPage, this.selectedCategory);
		}
	}

	// ============================== //
	// Gallery Category on Change
	// ============================== //
	categoryChange(e:any){
		this.selectedCategory = e;
		this.page = 1;
		this.fetchData(this.page, this.itemsPerPage, this.selectedCategory);
	}

	// ============================== //
	// Fetch Gallery Categories
	// ============================== //
	fetchDataCategory(){
		this.mainService.getGalleryCategories().subscribe((res:any)=>{
			this.dataCategory = res['data'];
		});
	}
}
