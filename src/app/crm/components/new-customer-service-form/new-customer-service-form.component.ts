import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BaseFormComponent} from '../../../shared/components/base-form';

@Component({
  selector: 'app-new-customer-service-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './new-customer-service-form.component.html',
  styleUrls: ['./new-customer-service-form.component.css']
})
export class NewCustomerServiceComponentForm extends BaseFormComponent implements OnInit {
  serviceRequestForm!: FormGroup;

  requestTypes = [
    { value: 'housekeeping', viewValue: 'Limpieza' },
    { value: 'technical', viewValue: 'Soporte técnico' },
    { value: 'amenity', viewValue: 'Amenidades' },
    { value: 'other', viewValue: 'Otros' }
  ];

  priorities = [
    { value: 'low', viewValue: 'Baja' },
    { value: 'normal', viewValue: 'Normal' },
    { value: 'high', viewValue: 'Alta' },
    { value: 'urgent', viewValue: 'Urgente' }
  ];

  rooms = [
    { id: 101, number: '101' },
    { id: 102, number: '102' },
    { id: 201, number: '201' },
    { id: 301, number: '301' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.serviceRequestForm = this.fb.group({
      roomId: ['', Validators.required],
      requestType: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      priority: ['normal', Validators.required]
    });
  }

  onSubmit() {
    if (this.serviceRequestForm.invalid) {
      this.serviceRequestForm.markAllAsTouched();
      return;
    }

    const formValue = this.serviceRequestForm.value;


    const serviceRequest = {
      ...formValue,
      userId: 1,
      hotelId: 1,
      status: 'pending',
      createdAt: new Date().toISOString(),
      assignedStaffId: null,
      completedAt: null
    };

    console.log('Sending:', serviceRequest);


    this.router.navigate(['/crm/customer-service']);
  }

  onCancel(){
    this.router.navigate(['/crm/customer-service']);
  }
}
