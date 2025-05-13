import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServicesCreateAndEditComponent } from './customer-services-create-and-edit.component';

describe('CustomerServicesCreateAndEditComponent', () => {
  let component: CustomerServicesCreateAndEditComponent;
  let fixture: ComponentFixture<CustomerServicesCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerServicesCreateAndEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServicesCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
