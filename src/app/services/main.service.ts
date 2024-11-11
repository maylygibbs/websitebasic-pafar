import { Injectable, Inject, PLATFORM_ID} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '@environments';
import { DOCUMENT } from '@angular/common';
import * as qs from 'qs';


@Injectable()
export class MainService {
    public isBrowser: boolean = false;
    public isInnerPage: boolean = true;
    public isDemoPage: boolean = false;
    public isHeaderWhite: boolean = false;
    public baserUrl: string = environment.baseUrl;

    public disqusPublicKey: string = "";
    public disqusForum: string = "";
    public disqusDomain: string = "";
    public siteName: string = "";
    public siteHeaderLogo: string = "";
    public siteFooterLogo: string = "";
    public siteFooterContent: string = "";
    public siteFooterList: any[] = [];
    public homeTemplate: string = "";
    public blogTemplate: string = "";
    public blogSinglePost: string = "";
    public blogItemPerPage: number = 8;
    
    constructor(
        private metaTagService: Meta,
		private title: Title,
        private http: HttpClient,
        @Inject(DOCUMENT) private dom: any,
        @Inject(PLATFORM_ID) platformId: Object
    ){
        this.isBrowser = isPlatformBrowser(platformId);
    }

    // ======================= //
    // FETCH CONFIGURATION
    // ======================= //
    fetchConfiguration(){
        this.http.get(`${environment.baseUrl}/api/site-configuration?populate=*`).subscribe((res:any)=>{
            let data = res['data']['attributes'];
            this.disqusPublicKey = data['DisqusPublicKey'];
            this.disqusForum = data['DisqusForum'];
            this.disqusDomain = data['DisqusDomain'];
            this.siteName = data['SiteName'];
            this.siteHeaderLogo = data['SiteLogo']['data']['attributes']['url'];
            this.siteFooterLogo = data['FooterLogo']['data']['attributes']['url'];
            this.siteFooterContent = data['FooterContent'];
            this.siteFooterList = data['FooterList'];
            this.homeTemplate = data['HomePageTemplate'];
            this.blogTemplate = data['BlogPageTemplate'];
            this.blogItemPerPage = data['BlogItemPerPage'];
            this.blogSinglePost = data['BlogSinglePost'];

            if(data['favicon_16x16']['data']){
                this.generateFavIcon('16x16',this.baserUrl + data['favicon_16x16']['data']['attributes']['url'],'icon');
            }
            if(data['favicon_32x32']['data']){
                this.generateFavIcon('32x32',this.baserUrl + data['favicon_32x32']['data']['attributes']['url'],'icon');
            }
            if(data['favicon_144x144']['data']){
                this.generateFavIcon('144x144',this.baserUrl + data['favicon_144x144']['data']['attributes']['url'],'icon');
            }
            if(data['favicon_196x196']['data']){
                this.generateFavIcon('196x196',this.baserUrl + data['favicon_196x196']['data']['attributes']['url'],'icon');
                this.generateFavIcon('196x196',this.baserUrl + data['favicon_196x196']['data']['attributes']['url'],'apple-touch-icon');
            }
        });
    }

    // ======================= //
    // Update Meta Page
    // ======================= //
    updateMetaPage(SEO:any){
        this.updateMetaTitle(SEO['metaTitle']);
        this.metaTagService.updateTag({ name: 'keywords', content: SEO['keywords'] });
        this.metaTagService.updateTag({ name: 'description', content: SEO['metaDescription'] });
        this.metaTagService.updateTag({ name: 'og:title', content: SEO['metaTitle'] })
        this.metaTagService.updateTag({ name: 'og:description', content: SEO['metaDescription'] })
        this.metaTagService.updateTag({ name: 'og:image', content: this.baserUrl + SEO['metaImage']['data']['attributes']['formats']['medium']['url'] })
        this.metaTagService.updateTag({ name: 'twitter:card', content: "summary_large_image" })
        this.metaTagService.updateTag({ name: 'twitter:title', content: SEO['metaTitle'] })
        this.metaTagService.updateTag({ name: 'twitter:url', content: environment.hostURL + SEO['canonicalURL'] })
        this.metaTagService.updateTag({ name: 'twitter:image', content: this.baserUrl + SEO['metaImage']['data']['attributes']['formats']['medium']['url'] });
        this.updateCanonicalUrl(environment.hostURL + SEO['canonicalURL']);
    }

    // ======================= //
    // Update Title Page
    // ======================= //
    updateMetaTitle(title:string){
        this.title.setTitle(this.siteName + ' | ' + title);
    }

    // ======================= //
    // Generate Favicon
    // ======================= //
    generateFavIcon(sizes:string,url:string,rel:string){
        const link = this.dom.createElement('link');
        link['type'] = 'image/png';
        link['rel'] = rel;
        link['href'] = url;
        link['id'] = 'id-' + sizes;
        link.setAttribute('sizes', sizes);
        this.dom.getElementsByTagName('head')[0].appendChild(link)
    }

    // ======================= //
    // Generate ConicalUrl
    // ======================= //
    updateCanonicalUrl(url:string){
        const head = this.dom.getElementsByTagName('head')[0];
        var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
        if (element==null) {
          element= this.dom.createElement('link') as HTMLLinkElement;
          head.appendChild(element);
        }
        element.setAttribute('rel','canonical')
        element.setAttribute('href',url)
    }

    // ======================= //
    // Fetch Home 1 Page
    // ======================= //
    getHome1Content(){
        const query = qs.stringify({
            populate: ['Section1', 'HeroImage','Section2.ListItem', 'Section2.Image1','Features','ProductScreenshot','SectionPrice','Pricing.PriceList','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/page-home-1?${query}`);
    }

    // ======================= //
    // Fetch Home 2 Page
    // ======================= //
    getHome2Content(){
        const query = qs.stringify({
            populate: ['HeroSection.Image1','HeroSection.Image2','Section1','Section2.Image1','Section3.Image1','Section4.Image1','Features','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/page-home-2?${query}`);
    }

    // ======================= //
    // Fetch Home 3 Page
    // ======================= //
    getHome3Content(){
        const query = qs.stringify({
            populate: ['HeroSection.Image1','HeroSection.Image2','Section1.Image1','Section2.Image1','Section3.Image1','Features','ProductScreenshot','Pricing.PriceList','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/page-home-3?${query}`);
    }

    // ======================= //
    // Fetch Home 4 Page
    // ======================= //
    getHome4Content(){
        const query = qs.stringify({
            populate: ['HeroSection','HeroSection.Image1','ProductScreenshot','Section1','Feature','Section2.Image1','Section3.Image1','Section4.Image1','SectionPrice','Pricing.PriceList','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/page-home-4?${query}`);
    }

    // ======================= //
    // Fetch Home 5 Page
    // ======================= //
    getHome5Content(){
        const query = qs.stringify({
            populate: ['HeroSection.Image1','TabSection','Section1.Image1','Section2.Image1','Section3.Image1','Section4.Image1','Section5','Features','PriceSection.PriceList','Section6','Section6List','Section1_Menu','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/page-home-5?${query}`);
    }

    // ======================= //
    // Fetch Home 6 Page
    // ======================= //
    getHome6Content(){
        const query = qs.stringify({
            populate: ['HeroSection.Image1','Section1','Section1List','Section1List','Section2.Image1','Features','PriceSection','Pricing.PriceList','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/page-home-6?${query}`);
    }

    // ======================= //
    // Fetch Home 7 Page
    // ======================= //
    getHome7Content(){
        const query = qs.stringify({
            populate: ['HeroSection.Image1','Features','Pricing.PriceList','Section1','Section2.Image1','PriceSection','Pricing.PriceList','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/page-home-7?${query}`);
    }

    // ======================= //
    // Fetch Home 8 Page
    // ======================= //
    getHome8Content(){
        const query = qs.stringify({
            populate: ['HeroSection.Image1','Features','Section1','Services','Section2.Image1','PriceSection','Pricing.PriceList','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/page-home-8?${query}`);
    }

    // ======================= //
    // Fetch About Page
    // ======================= //
    getAboutContent(){
        const query = qs.stringify({
            populate: ['Image','Services','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/about?${query}`);
    }

    // ======================= //
    // Fetch Contact Page
    // ======================= //
    getContactContent(){
        const query = qs.stringify({
            populate: ['SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/cantact-us?${query}`);
    }

    // ======================= //
    // Fetch Service Page
    // ======================= //
    getServiceContent(){
         const query = qs.stringify({
            populate: ['Services','SEO.metaImage'],
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/service?${query}`);
    }

    // ======================= //
    // Fetch Gallery Page
    // ======================= //
    getGalleriesContent(page: number, itemsPerPage: number, category: string){
        let body:any = {
            pagination:{
                page: page,
                pageSize: itemsPerPage
            },
            populate: ['Image'],
            filters: {}
        };
        if(category){
            body['filters']['gallery_categories'] = {
                Slug: {
                    '$eq': category
                }
            };
        }
        const query = qs.stringify(body, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/galleries?${query}`)
    }

    // ======================= //
    // Fetch FAQ Page
    // ======================= //
    getFAQContent(){
        return this.http.get(`${environment.baseUrl}/api/faqs?populate=*`);
    }

    // ======================= //
    // Fetch Pricing Page
    // ======================= //
    getPricingContent(){
        return this.http.get(`${environment.baseUrl}/api/page-pricing?populate=Pricing.PriceList`);
    }

    // ======================= //
    // Fetch Career Page
    // ======================= //
    getCareerContent(){
        return this.http.get(`${environment.baseUrl}/api/careers?populate=*`);
    }

    // ======================= //
    // Fetch Testimonial Page
    // ======================= //
    getTestimonialContent(page: number, itemsPerPage: number){
        let body:any = {
            pagination:{
                page: page,
                pageSize: itemsPerPage
            },
            populate: '*',
        };
        const query = qs.stringify(body, {
            encodeValuesOnly: true, 
        });

        return this.http.get(`${environment.baseUrl}/api/testimonials?${query}`);
    }

    // ======================= //
    // Post Contact Us
    // ======================= //
    postContact(body:any){
        return this.http.post(`${environment.baseUrl}/account/contactame`,body);
    }

    // ======================= //
    // Fetch Data Teams
    // ======================= //
    getTeams(){
        return this.http.get(`${environment.baseUrl}/api/teams?populate=*`);
    }

    // ======================= //
    // Fetch Brand
    // ======================= //
    getBrands(){
        return this.http.get(`${environment.baseUrl}/api/brands?populate=*`);
    }

    // ======================= //
    // Fetch Gallery Categories
    // ======================= //
    getGalleryCategories(){
        return this.http.get(`${environment.baseUrl}/api/gallery-categories?populate=*`);
    }

    // ======================= //
    // BLOG SECTION
    // ======================= //
    public categorySlug: string = "";
	public tagSlug: string = "";

    // ======================= //
    // Fetch Blog & Pagination
    // ======================= //
    getBlogs(page: number, itemsPerPage: number){
        let body:any = {
            sort: ['publishedAt:desc'],
            populate: ['Image,blog_categories,tags'],
            fields: ['Title','SortDescription','Slug','uuid','publishedAt'],
            pagination:{
                page: page,
                pageSize: itemsPerPage
            },
            filters: {}
        };
        if(this.categorySlug){
            body['filters']['blog_categories'] = {
                Slug: {
                    '$eq': this.categorySlug
                }
            };
        }
        if(this.tagSlug){
            body['filters']['tags'] = {
                Slug: {
                    '$eq': this.tagSlug
                }
            };
        }

        const query = qs.stringify(body, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/blogs?${query}`)
    }

    // ====================================== //
    // Fetch Related Blog based on Category
    // ====================================== //
    getRelatedPost(categorySlug:string,uuid:string){
        const query = qs.stringify({
            fields: ['Title','SortDescription','Slug','uuid','publishedAt'],
            populate: ['Image'],
            randomSort: true,
            pagination:{
                pageSize: 2,
            },
            filters: {
                blog_categories: {
                    Slug:{
                        '$eq': categorySlug
                    }
                },
                uuid:{
                    '$ne':uuid
                }
            }
        }, {
            encodeValuesOnly: true, 
        });
        return this.http.get(`${environment.baseUrl}/api/blogs?${query}`);
    }

    // ======================= //
    // Fetch Single Blog
    // ======================= //
    getSingleBlog(slug:string,uuid:string){
        return this.http.get(`${environment.hostURL}/api/post-detail?slug=${slug}&uuid=${uuid}`);
    }

    // ======================= //
    // Fetch Single Post
    // ======================= //
    getPopularPost(){
        const query = qs.stringify({
            fields: ['Title','SortDescription','Slug','uuid','publishedAt'],
            pagination: {
                page:1,
                pageSize: 5
            },
            populate: ['Image,blog_categories,tags'],
            sort: ['Counter:desc']
        }, {
            encodeValuesOnly: true, 
        });
		return this.http.get(`${environment.baseUrl}/api/blogs?${query}`)
	}

    // ========================== //
	// Fetch Counter Comment
	// ========================== //
	fetchCounterComments(pageLink: string){
        return this.http.get(`${environment.hostURL}/api/counter-comments?pagelink=${pageLink}&forum=${this.disqusForum}&publickey=${this.disqusPublicKey}`);
	}
}