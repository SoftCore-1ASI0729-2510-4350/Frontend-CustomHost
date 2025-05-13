import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Booking {
  id: number;
  userId: number;
  hotelId: number;
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  totalPrice: number;
  paymentStatus: string;
  specialRequests: string;
  createdAt: string;
  roomDetails: Object;
}


@Component({
  selector: 'app-my-bookings-table',
  imports: [CommonModule, MatTableModule, MatIconModule, MatChipsModule, MatBadgeModule, DatePipe, TranslateModule],
  templateUrl: './my-bookings-table.component.html',
  styleUrl: './my-bookings-table.component.css',

})
export class MyBookingsTableComponent {
  @Input() bookings2: Booking[] = [];
  displayedColumns: string[] = ['id', 'roomId', 'checkInDate', 'checkOutDate', 'status', 'totalPrice', 'paymentStatus', 'specialRequests'];
  bookings: Booking[] = [
    {
      "id": 1,
      "userId": 1,
      "hotelId": 1,
      "roomId": 101,
      "checkInDate": "2025-05-01T14:00:00",
      "checkOutDate": "2025-05-05T12:00:00",
      "status": "active",
      "totalPrice": 480,
      "paymentStatus": "paid",
      "specialRequests": "Late check-in, around 20:00",
      "createdAt": "2025-03-15T09:45:00",
      "roomDetails": {
        "type": "standard",
        "floor": 1
      }
    },
    {
      "id": 2,
      "userId": 2,
      "hotelId": 1,
      "roomId": 201,
      "checkInDate": "2025-05-02T15:30:00",
      "checkOutDate": "2025-05-07T11:00:00",
      "status": "active",
      "totalPrice": 750,
      "paymentStatus": "paid",
      "specialRequests": "Quiet room away from elevator",
      "createdAt": "2025-03-20T11:30:00",
      "roomDetails": {
        "type": "deluxe",
        "floor": 2
      }
    },
    {
      "id": 3,
      "userId": 1,
      "hotelId": 1,
      "roomId": 102,
      "checkInDate": "2025-06-10T14:00:00",
      "checkOutDate": "2025-06-15T12:00:00",
      "status": "confirmed",
      "totalPrice": 500,
      "paymentStatus": "pending",
      "specialRequests": "",
      "createdAt": "2025-04-05T16:20:00",
      "roomDetails": {
        "type": "standard",
        "floor": 1
      }
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active': return 'primary';
      case 'confirmed': return 'accent';
      case 'cancelled': return 'warn';
      default: return '';
    }
  }

  getPaymentStatusColor(status: string): string {
    switch (status) {
      case 'paid': return 'primary';
      case 'pending': return 'warn';
      default: return '';
    }
  }
}
