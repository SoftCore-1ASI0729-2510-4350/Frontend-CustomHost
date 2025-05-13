import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface ServiceRequest {
  id: number;
  userId: number;
  hotelId: number;
  roomId: number;
  requestType: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
  assignedStaffId: number | null;
  completedAt: string | null;
}

@Component({
  selector: 'app-customer-service-table',
  imports: [CommonModule, MatTableModule, MatIconModule, MatChipsModule, MatBadgeModule, DatePipe, TranslateModule],
  templateUrl: './customer-service-table.component.html',
  styleUrl: './customer-service-table.component.css',
})
export class CustomerServiceTableComponent {
  displayedColumns: string[] = ['id', 'requestType', 'description', 'status', 'priority', 'createdAt', 'completedAt'];
  serviceRequests: ServiceRequest[] = [
    {
      "id": 1,
      "userId": 1,
      "hotelId": 1,
      "roomId": 101,
      "requestType": "housekeeping",
      "description": "Necesito toallas extras, por favor",
      "status": "pending",
      "priority": "normal",
      "createdAt": "2025-05-02T09:15:00",
      "assignedStaffId": null,
      "completedAt": null
    },
    {
      "id": 2,
      "userId": 2,
      "hotelId": 1,
      "roomId": 201,
      "requestType": "technical",
      "description": "El aire acondicionado hace ruido extraño",
      "status": "in-progress",
      "priority": "high",
      "createdAt": "2025-05-02T10:45:00",
      "assignedStaffId": 5,
      "completedAt": null
    },
    {
      "id": 3,
      "userId": 1,
      "hotelId": 1,
      "roomId": 101,
      "requestType": "amenity",
      "description": "¿Podrían traer una plancha?",
      "status": "completed",
      "priority": "normal",
      "createdAt": "2025-05-01T18:20:00",
      "assignedStaffId": 4,
      "completedAt": "2025-05-01T18:45:00"
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return 'primary';
      case 'in-progress': return 'accent';
      case 'pending': return 'warn';
      default: return '';
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'low': return 'primary';
      case 'normal': return 'accent';
      case 'high': return 'warn';
      default: return '';
    }
  }

  getRequestTypeIcon(requestType: string): string {
    switch (requestType) {
      case 'housekeeping': return 'cleaning_services';
      case 'technical': return 'handyman';
      case 'amenity': return 'room_service';
      default: return 'help';
    }
  }
}
