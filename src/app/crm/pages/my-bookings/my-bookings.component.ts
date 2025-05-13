import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service.service';
import { MyBooking } from '../../model/my-booking.entity';
import { MyBookingsTableComponent } from "../../components/my-bookings-table/my-bookings-table.component";

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
  imports: [MyBookingsTableComponent]
})
export class MyBookingsComponent implements OnInit {
  bookings: MyBooking[] = [];

  constructor(private bookingService: BookService) { }

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(
      (data: MyBooking[]) => {
        this.bookings = data;
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }
}
