import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-new-customer-service',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    TranslateModule
  ],
  templateUrl: './new-customer-service.component.html',
  styleUrl: './new-customer-service.component.css'
})
export class CustomerServiceActionsComponent {
  constructor(private router: Router) {}

  navigateToNewServiceRequest(): void {
    this.router.navigate(['/crm/customer-service/new']);
  }
}
