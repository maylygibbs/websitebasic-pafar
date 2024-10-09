import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlt1Component } from './home-alt1.component';

describe('HomeAlt1Component', () => {
  let component: HomeAlt1Component;
  let fixture: ComponentFixture<HomeAlt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
