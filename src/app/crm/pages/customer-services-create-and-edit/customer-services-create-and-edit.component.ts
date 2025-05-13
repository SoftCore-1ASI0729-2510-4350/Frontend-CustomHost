import { Component } from '@angular/core';
import {
  NewCustomerServiceComponentForm
} from '../../components/new-customer-service-form/new-customer-service-form.component';

@Component({
  selector: 'app-customer-services-create-and-edit',
  imports: [
    NewCustomerServiceComponentForm
  ],
  templateUrl: './customer-services-create-and-edit.component.html',
  styleUrl: './customer-services-create-and-edit.component.css'
})
export class CustomerServicesCreateAndEditComponent {

}
