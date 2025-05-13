import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceTableComponent } from './customer-service-table.component';

describe('CustomerServiceTableComponent', () => {
  let component: CustomerServiceTableComponent;
  let fixture: ComponentFixture<CustomerServiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerServiceTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
