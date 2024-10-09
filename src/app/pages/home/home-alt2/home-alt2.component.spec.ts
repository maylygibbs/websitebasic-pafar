import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlt2Component } from './home-alt2.component';

describe('HomeAlt2Component', () => {
  let component: HomeAlt2Component;
  let fixture: ComponentFixture<HomeAlt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
