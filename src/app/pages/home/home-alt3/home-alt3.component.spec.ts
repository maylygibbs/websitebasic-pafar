import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlt3Component } from './home-alt3.component';

describe('HomeAlt3Component', () => {
  let component: HomeAlt3Component;
  let fixture: ComponentFixture<HomeAlt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlt3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
