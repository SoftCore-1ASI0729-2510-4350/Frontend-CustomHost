import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerServiceFormComponent } from './new-customer-service-form.component';

describe('NewCustomerServiceFormComponent', () => {
  let component: NewCustomerServiceFormComponent;
  let fixture: ComponentFixture<NewCustomerServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustomerServiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomerServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
