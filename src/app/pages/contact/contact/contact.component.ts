import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MainService } from '@services';
declare var smoothScripts: any;
declare var $: any;
declare var grecaptcha: any;
declare var bootstrap: any;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	public data: any;
	public name: string = "";
	public email: string = "";
	public cell: string = "";
	public subject: string = "";
	public comment: string = "";
	public submiting: boolean = false;
	public isVerified: boolean = false;
	public token: string = "";
	public isSuccess: boolean = true;
	public isFailed: boolean = false;
	private toastElem: any = null;
	private toastAlert: any = null;

	constructor(
        private mainService: MainService,
		private toastr: ToastrService,
    ) { 
        this.mainService.isInnerPage = true;
    }

	ngOnInit(): void {
		
	}

	ngAfterViewInit(){
		if(this.mainService.isBrowser){
			// ============================ //
			// JS Layout Init
			// ============================ //
			smoothScripts.select2Input();
			this.toastElem = document.getElementById('contactToast');
			this.toastAlert = new bootstrap.Toast(this.toastElem);

			$('#subject').on('select2:select', (e:any)=> {
				var data = e.params.data;
				this.subject = data['text'];
			});
		}
	}

	// ============================ //
	// Fetch Contact Data
	// ============================ //
	fetchData(){
		this.mainService.getContactContent().subscribe((res:any)=>{
			this.data = res['data']['attributes'];
			this.mainService.updateMetaPage(this.data['SEO']);

			if(this.mainService.isBrowser){
				grecaptcha.enterprise.render('html_element', {
					'sitekey' : this.data.GoogleRecaptchaSiteKey,
					'callback' : (e:any)=>{
						this.token = e;
						this.isVerified = true;
					},
				});
			}
		});
	}

	// ============================ //
	// Contact Send Message to Email
	// ============================ //
	sendMessage(form: NgForm){
		//this.toastAlert.hide()
		this.isSuccess = false;
		this.isFailed = false;
		if(form.valid){
			this.submiting = true;
			this.mainService.postContact({
				"nombre": this.name,
				"email": this.email,
				"asunto":this.subject,
				"telefono": this.cell,
				"mensaje": this.comment,
			}).subscribe((res:any)=>{
				this.submiting = false;
				this.isSuccess = true;
				form.resetForm();
				this.toastr.success('Su mensaje fué enviado con éxito. En la brevedad posible será contactado.')
			}, (err)=>{
				this.submiting = false;
				this.isFailed = true;
				this.toastr.error('Su mensaje no fué enviado. Intentelo más tarde.')
			});
		}
	}
}

