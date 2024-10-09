import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlt8Component } from './home-alt8.component';

describe('HomeAlt8Component', () => {
  let component: HomeAlt8Component;
  let fixture: ComponentFixture<HomeAlt8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlt8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlt8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
