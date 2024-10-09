import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSinglePostLeftSidebarComponent } from './blog-single-post-left-sidebar.component';

describe('BlogSinglePostLeftSidebarComponent', () => {
  let component: BlogSinglePostLeftSidebarComponent;
  let fixture: ComponentFixture<BlogSinglePostLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSinglePostLeftSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSinglePostLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
