import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Booking } from '../../model/book.entity';
import {BookFormComponent} from '../../components/book-form/book-form.component';

@Component({
  selector: 'app-book-view',
  imports: [
    BookFormComponent
  ],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private router: Router) {}

  goToRooms(searchData: Booking) {
    if (!searchData.fromDate || !searchData.toDate) {
      console.error('Dates cannot be null');
      alert('Please select both start and end dates.');
      return;
    }

    const navigationExtras: NavigationExtras = {
      queryParams: {
        from: searchData.fromDate.toISOString(),
        to: searchData.toDate.toISOString()
      }
    };

    this.router.navigate(['/crm/available-rooms-view'], navigationExtras)
      .then(navigationResult => {
        if (!navigationResult) {
          console.warn('Navigation was not successful');
        }
      })
      .catch(error => {
        console.error('Failed in navigation:', error);
      });
  }
}
