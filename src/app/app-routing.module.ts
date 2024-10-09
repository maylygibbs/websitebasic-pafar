import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
	},
	/*{
		path: 'demo',
		loadChildren: () => import('./pages/demo/demo.module').then(m => m.MainModule)
	},*/
	{
		path: 'about',
		loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
	},
	{
		path: 'services',
		loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule)
	},
	{
		path: 'alliances',
		loadChildren: () => import('./pages/alliances/alliances.module').then(m => m.AlliancesModule)
	},
	{
		path: 'representations',
		loadChildren: () => import('./pages/representations/representations.module').then(m => m.RepresentationsModule)
	},
	/*{
		path: 'pricing',
		loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule)
	},
	{
		path: 'team',
		loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule)
	},
	{
		path: 'gallery',
		loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)
	},
	{
		path: 'faq',
		loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule)
	},
	{
		path: 'career',
		loadChildren: () => import('./pages/career/career.module').then(m => m.CareerModule)
	},
	{
		path: 'testimonial',
		loadChildren: () => import('./pages/testimoni/testimoni.module').then(m => m.TestimoniModule)
	},
	{
		path: 'blog',
		loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
	},*/
	{
		path: 'contact',
		loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
