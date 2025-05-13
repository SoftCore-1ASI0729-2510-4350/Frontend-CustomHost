import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookingsTableComponent } from './my-bookings-table.component';

describe('MyBookingsTableComponent', () => {
  let component: MyBookingsTableComponent;
  let fixture: ComponentFixture<MyBookingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBookingsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
