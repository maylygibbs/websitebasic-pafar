import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { MainSinglePostComponent } from './main-single-post/main-single-post.component';

const routes: Routes = [
    {
        path: '',
        component: MainBlogComponent
    },
    {
        path:  ':slug_uid',
        component: MainSinglePostComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class BlogRoutingModule { }
