import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerServiceComponent } from './new-customer-service.component';

describe('NewCustomerServiceComponent', () => {
  let component: NewCustomerServiceComponent;
  let fixture: ComponentFixture<NewCustomerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustomerServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
