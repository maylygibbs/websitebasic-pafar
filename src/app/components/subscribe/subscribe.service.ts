import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
	public email: string = '';
	public isSubmit: boolean = false;
	public isSuccess: boolean = false;
	public isFailed: boolean = false;
	public toastElem: any = null;
	public toastAlert: any = null;

	constructor(
		private http: HttpClient
	) { }

	// ======================= //
    // POST Subscribe Newsletter
    // ======================= //
	postSubscribeNews(email: string){
		this.toastAlert.hide()
		this.isSubmit = true;
		this.isSuccess = false;
		this.isFailed = false;

		this.http.post(`${environment.baseUrl}/strapi-newsletter/newsletter/subscribe`,{email: email}).subscribe((res:any)=>{
			this.isSubmit = false;
			this.isSuccess = true;
			this.toastAlert.show();
		}, (err)=>{
			this.isSubmit = false;
			this.isFailed = true;
			this.toastAlert.show();
		});
	}
}
