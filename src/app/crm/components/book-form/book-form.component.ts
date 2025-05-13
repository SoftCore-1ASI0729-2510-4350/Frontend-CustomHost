import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Booking, createBooking, isValidBooking } from '../../model/book.entity';
import { BookService } from '../../services/book-service.service';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  @Output() searchResult = new EventEmitter<any>();
  private snackBar = inject(MatSnackBar);
  private bookingService = inject(BookService);

  bookingForm = new FormGroup({
    fromDate: new FormControl<Date | null>(null, Validators.required),
    toDate: new FormControl<Date | null>(null, Validators.required)
  });

  submitForm() {
    this.bookingForm.markAllAsTouched();

    if (this.bookingForm.invalid) return;

    const booking: Booking = {
      fromDate: this.bookingForm.value.fromDate!,
      toDate: this.bookingForm.value.toDate!
    };

    if (!isValidBooking(booking)) {
      this.showError('Invalid booking dates');
      return;
    }

    this.bookingService.searchAvailability(booking).subscribe({
      next: (response) => {
        this.searchResult.emit({
          fromDate: booking.fromDate,
          toDate: booking.toDate
        });
      },
      error: (err) => {
        this.showError('Fail looking for availability');
        console.error(err);
      }
    });
  }

  private showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }
}
