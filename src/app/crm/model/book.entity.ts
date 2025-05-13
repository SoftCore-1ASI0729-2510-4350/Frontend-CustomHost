export interface Booking {
  fromDate: Date | null;
  toDate: Date | null;
}

export function createBooking(): Booking {
  return {
    fromDate: null,
    toDate: null
  };
}

export function isValidBooking(booking: Booking): boolean {
  return booking.fromDate !== null &&
    booking.toDate !== null &&
    booking.toDate > booking.fromDate;
}
