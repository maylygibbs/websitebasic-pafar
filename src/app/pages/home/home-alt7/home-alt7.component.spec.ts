import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlt7Component } from './home-alt7.component';

describe('HomeAlt7Component', () => {
  let component: HomeAlt7Component;
  let fixture: ComponentFixture<HomeAlt7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlt7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
