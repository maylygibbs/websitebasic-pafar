import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlt5Component } from './home-alt5.component';

describe('HomeAlt5Component', () => {
  let component: HomeAlt5Component;
  let fixture: ComponentFixture<HomeAlt5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlt5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
