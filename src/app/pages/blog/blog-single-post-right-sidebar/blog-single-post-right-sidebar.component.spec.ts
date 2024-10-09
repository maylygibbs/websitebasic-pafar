import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSinglePostRightSidebarComponent } from './blog-single-post-right-sidebar.component';

describe('BlogSinglePostRightSidebarComponent', () => {
  let component: BlogSinglePostRightSidebarComponent;
  let fixture: ComponentFixture<BlogSinglePostRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSinglePostRightSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSinglePostRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
