import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridRightSidebarComponent } from './blog-grid-right-sidebar.component';

describe('BlogGridRightSidebarComponent', () => {
  let component: BlogGridRightSidebarComponent;
  let fixture: ComponentFixture<BlogGridRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridRightSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGridRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
