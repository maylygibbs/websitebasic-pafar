import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingGridComponent } from './pricing-grid.component';

describe('PricingGridComponent', () => {
  let component: PricingGridComponent;
  let fixture: ComponentFixture<PricingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
