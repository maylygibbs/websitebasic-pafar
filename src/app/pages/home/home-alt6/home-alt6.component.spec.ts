import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlt6Component } from './home-alt6.component';

describe('HomeAlt6Component', () => {
  let component: HomeAlt6Component;
  let fixture: ComponentFixture<HomeAlt6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlt6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
