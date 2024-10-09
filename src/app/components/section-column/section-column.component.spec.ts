import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionColumnComponent } from './section-column.component';

describe('SectionColumnComponent', () => {
  let component: SectionColumnComponent;
  let fixture: ComponentFixture<SectionColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
