import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeSingleComponent } from './subscribe-single.component';

describe('SubscribeSingleComponent', () => {
  let component: SubscribeSingleComponent;
  let fixture: ComponentFixture<SubscribeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
