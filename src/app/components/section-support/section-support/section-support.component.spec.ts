import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSupportComponent } from './section-support.component';

describe('SectionSupportComponent', () => {
  let component: SectionSupportComponent;
  let fixture: ComponentFixture<SectionSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
