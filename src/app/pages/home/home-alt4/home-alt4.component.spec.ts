import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlt4Component } from './home-alt4.component';

describe('HomeAlt4Component', () => {
  let component: HomeAlt4Component;
  let fixture: ComponentFixture<HomeAlt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlt4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
