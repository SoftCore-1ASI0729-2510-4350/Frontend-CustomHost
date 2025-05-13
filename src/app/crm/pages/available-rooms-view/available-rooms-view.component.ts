import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, Room } from '../../services/book-service.service';
import { IotService } from '../../../guest-experience/services/iot-devices.service';
import { Booking } from '../../model/book.entity';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-available-rooms-view',
  templateUrl: './available-rooms-view.component.html',
  imports: [
    CommonModule,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardActions,
    MatButton
  ],
  styleUrls: ['./available-rooms-view.component.css']
})
export class AvailableRoomsViewComponent implements OnInit {
  rooms: Room[] = [];
  devices: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private iotService: IotService
  ) {}

  ngOnInit(): void {
    const fromParam = this.route.snapshot.queryParamMap.get('from');
    const toParam = this.route.snapshot.queryParamMap.get('to');

    if (!fromParam || !toParam) {
      console.error('Missing dates in query params');
      return;
    }

    const fromDate = new Date(fromParam);
    const toDate = new Date(toParam);

    if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
      console.error('Invalid date format in query params');
      return;
    }

    this.bookService.searchAvailability({ fromDate, toDate }).subscribe({
      next: (response) => {
        this.rooms = response.rooms;

        const allDeviceIds = [
          ...new Set(this.rooms.flatMap((r) => r.iotDeviceIds || []))
        ];

        if (allDeviceIds.length > 0) {
          this.iotService.getDevicesByIds(allDeviceIds).subscribe({
            next: (devices) => {
              this.devices = devices;
            },
            error: (err) => console.error('Error fetching devices:', err)
          });
        }
      },
      error: (err) => console.error('Error fetching availability:', err)
    });
  }

  getDevices(roomDeviceIds: number[] = []) {
    return this.devices.filter(d => roomDeviceIds.includes(d.id));
  }

  goToCustomization(room: Room): void {
    const from = this.route.snapshot.queryParams['from'];
    const to = this.route.snapshot.queryParams['to'];

    if (!room.id || !from || !to) {
      console.error('Missing required parameters:', { roomId: room.id, from, to });
      return;
    }

    this.router.navigate(['/crm', 'customize-room-view', room.id], {
      queryParams: { from, to }
    });
  }
}
