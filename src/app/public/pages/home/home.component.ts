import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

interface CheckOut {
  room: string;
  name: string;
  checkIn: string;
  checkOut: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  stats = {
    occupiedRooms: 36,
    totalRooms: 50,
    todayBookings: 12,
    maintenanceRequests: 3,
    pendingCheckouts: 3
  };

  checkOuts: CheckOut[] = [
    { room: '101', name: 'Ana López', checkIn: '2025-05-08', checkOut: '2025-05-11' },
    { room: '202', name: 'Mario Ruiz', checkIn: '2025-05-09', checkOut: '2025-05-13' },
    { room: '303', name: 'Jorge Quispe', checkIn: '2025-05-07', checkOut: '2025-05-10' }
  ];

  displayedColumns: string[] = ['room', 'name', 'checkIn', 'checkOut'];
}
