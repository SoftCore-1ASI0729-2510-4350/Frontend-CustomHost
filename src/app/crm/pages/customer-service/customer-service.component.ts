import { Component } from '@angular/core';
import {CustomerServiceTableComponent} from '../../components/customer-service-table/customer-service-table.component';
import {CustomerServiceActionsComponent} from '../../components/new-customer-service/new-customer-service.component';

@Component({
  selector: 'app-customer-service',
  imports: [
    CustomerServiceTableComponent,
    CustomerServiceActionsComponent,
  ],
  templateUrl: './customer-service.component.html',
  styleUrl: './customer-service.component.css'
})
export class CustomerServiceComponent {

}
