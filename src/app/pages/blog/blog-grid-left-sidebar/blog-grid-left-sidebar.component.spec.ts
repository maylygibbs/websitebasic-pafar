import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridLeftSidebarComponent } from './blog-grid-left-sidebar.component';

describe('BlogGridLeftSidebarComponent', () => {
  let component: BlogGridLeftSidebarComponent;
  let fixture: ComponentFixture<BlogGridLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridLeftSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGridLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
