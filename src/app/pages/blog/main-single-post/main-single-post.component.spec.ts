import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSinglePostComponent } from './main-single-post.component';

describe('MainSinglePostComponent', () => {
  let component: MainSinglePostComponent;
  let fixture: ComponentFixture<MainSinglePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSinglePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
