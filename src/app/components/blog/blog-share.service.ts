import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';
import { MainService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class BlogShareService {
	public blogInfo: any;

	constructor(
		private http: HttpClient,
		private mainService: MainService
	) { }

	// ========================== //
	// Fetch Blog Info
	// ========================== //
	fetchBlogInfo(){
		return this.http.get(`${environment.baseUrl}/api/page-blog?populate=*`).subscribe((res:any)=>{
			this.blogInfo = res['data']['attributes'];
		});
	}

	// ========================== //
	// Fetch Blog Categories
	// ========================== //
	fetchCategories(){
		return this.http.get(`${environment.baseUrl}/api/categories`)
	}

	// ========================== //
	// Fetch Blog Tags
	// ========================== //
	fetchTags(){
		return this.http.get(`${environment.baseUrl}/api/tags`)
	}
}
