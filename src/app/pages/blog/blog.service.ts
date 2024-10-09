import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MainService } from '@services';
import { environment } from '@environments';
import * as moment from 'moment';
declare var smoothScripts: any;

@Injectable({
  providedIn: 'root'
})
export class BlogService {
	public blogs: any[] = [];
	public baseUrl: string = environment.baseUrl;
	public loading: boolean = false;
	public page: number = 1;
	public total: number = 0;
	public path: string = "/blog";
	public dataSingleBlog: any = null;
	public relatedPost: any[] = [];

	constructor(
		private mainService: MainService,
		private http: HttpClient,
		private router: Router,
		private route: ActivatedRoute,
	) { 
		this.route.queryParams.subscribe((p:any) => {
			this.mainService.categorySlug = "";
			this.mainService.tagSlug = "";

			if(p.category) this.mainService.categorySlug = p.category;
			if(p.tag) this.mainService.tagSlug = p.tag;

			if(p.page){
				this.page = Number(p.page);
			}else{
				this.page = 1;
			}

			// ============================ //
			// Fetch Blog Listing 
			// ============================ //
			this.fetchData(this.page, this.mainService.blogItemPerPage);
		});
	}

	// ============================ //
	// Fetch Posts Data
	// ============================ //
	fetchData(page: number, itemsPerPage: number){
		this.loading = true;
		this.mainService.getBlogs(page, itemsPerPage).subscribe((res:any)=>{
			this.blogs = res['data'];
			this.total = res['meta']['pagination']['total'];
			this.loading = false;
			this.blogs.map((x:any)=>{
				x.attributes['DisplayDate'] = moment(x.attributes.publishedAt,"YYYY-MM-DD'T'HH:mm:ss.SSS'Z'").format("DD MMM YYYY");
				x.attributes['displayCategories'] = x.attributes['blog_categories']['data'].map((x:any)=>{
					return x.attributes.Name;
				});
			});

			if(this.mainService.isBrowser){
				window.scrollTo(0, 0);
			}
		});
	}

	// ============================ //
	// On Pagination Change
	// ============================ //
	pageChange(e: number){
		if(!this.loading){
			this.page = e;
			let queryUrl: any = { page: this.page };
			if(this.mainService.categorySlug) queryUrl['category'] = this.mainService.categorySlug;
			if(this.mainService.tagSlug) queryUrl['tag'] = this.mainService.tagSlug;
			this.router.navigate([this.path],{ queryParams: queryUrl });
		}
	}

	// ============================ //
	// Fetch Single Post Data
	// ============================ //
	fetchSingleData(slug:string,uuid:string){
		this.dataSingleBlog = null;
		this.mainService.getSingleBlog(slug,uuid).subscribe((res:any)=>{
			this.dataSingleBlog = res;

			if(!this.dataSingleBlog.Body.includes(this.baseUrl)){
				this.dataSingleBlog.Body = this.dataSingleBlog.Body.split("/uploads/").join(this.baseUrl + "/uploads/");
			}
			
			this.dataSingleBlog['DisplayDate'] = moment(this.dataSingleBlog.publishedAt,"YYYY-MM-DD'T'HH:mm:ss.SSS'Z'").format("DD MMM YYYY");
			
			if(this.dataSingleBlog['SEO']['canonicalURL'] == null){
				this.dataSingleBlog['SEO']['canonicalURL'] = this.path + '/' + this.dataSingleBlog.Slug + '_' +  this.dataSingleBlog.uuid;
			}

			this.mainService.updateMetaPage(this.dataSingleBlog['SEO']);

			if(this.mainService.isBrowser){

				this.mainService.fetchCounterComments(`${environment.hostURL}${this.path}/${this.dataSingleBlog.Slug}_${this.dataSingleBlog.uuid}`).subscribe((resComment:any)=>{
					this.dataSingleBlog.commentCounter = resComment['response'].length ? resComment['response'][0]['posts'] : 0;
				});
				
				this.fetchRelatedPost(
					this.dataSingleBlog.blog_categories.data[0].attributes.Slug,
					this.dataSingleBlog.uuid
				);

				if(this.mainService.isBrowser){
					setTimeout(()=>{
						// ============================ //
						// Embed Disqus for single post
						// ============================ //
						smoothScripts.disqusEmbed(this.mainService.disqusDomain,environment.hostURL + this.path,slug + '_' + uuid);
					}, 1000);
				}
				
			}
		});
	}

	// ============================ //
	// Fetch Related Posts
	// ============================ //
	fetchRelatedPost(category:string,uuid:string){
		this.mainService.getRelatedPost(category,uuid).subscribe((res:any)=>{
			this.relatedPost = res['data'];
			this.relatedPost.map((x:any)=>{
				x.attributes['DisplayDate'] = moment(x.attributes.publishedAt,"YYYY-MM-DD'T'HH:mm:ss.SSS'Z'").format("DD MMM YYYY");
			});
		});
	}
}
