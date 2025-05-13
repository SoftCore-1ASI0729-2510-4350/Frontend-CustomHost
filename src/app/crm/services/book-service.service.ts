import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {Booking} from '../model/book.entity';

export interface Room {
  id: number;
  name: string;
  description: string;
  capacity: number;
  amenities: string[];
  price: number;
  images: string[];
  iotDeviceIds: number[];
}

export interface AvailabilityResponse {
  rooms: Room[];
}

@Injectable({providedIn: 'root'})
export class BookService {
  private readonly mockRooms: Room[] = [
    {
      id: 201,
      name: "Presidential Suite",
      description: "Luxurious suite with king-size bed, sea view, and jacuzzi.",
      capacity: 2,
      amenities: ["Wi-Fi", "Air Conditioning", "Mini Bar", "Jacuzzi", "Room Service", "Smart Fragrance"],
      price: 500,
      images: [
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
        "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
      ],
      iotDeviceIds: [1, 2, 6, 7]
    },
    {
      id: 202,
      name: "Deluxe Twin",
      description: "Modern room with two twin beds and a working desk, ideal for business travelers.",
      capacity: 2,
      amenities: ["Wi-Fi", "Smart TV", "Desk", "Automatic Curtains"],
      price: 280,
      images: [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg"
      ],
      iotDeviceIds: [2, 3, 4]
    },
    {
      id: 203,
      name: "Family Suite",
      description: "Spacious suite for families with living room, kitchenette, and ambient music system.",
      capacity: 4,
      amenities: ["Wi-Fi", "Kitchenette", "Living Room", "Ambient Sound", "Fragrance"],
      price: 390,
      images: [
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
        "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg"
      ],
      iotDeviceIds: [2, 5, 6, 8]
    },
  ];

  searchAvailability(booking: Booking): Observable<AvailabilityResponse> {
    try {
      this.validateBookingParams(booking);

      const filteredRooms = this.filterRooms(booking);
      return this.simulateApiResponse({rooms: filteredRooms}, 300);
    } catch (error) {
      return this.simulateErrorResponse(error);
    }
  }

  getRoomById(id: number): Observable<Room | undefined> {
    return this.simulateApiResponse(
      this.mockRooms.find(room => room.id === id),
      200
    );
  }

  private filterRooms(booking: Booking): Room[] {
    return this.mockRooms.filter(room =>
      this.meetsCapacity(room, booking) &&
      this.meetsAmenities(room, booking)
    );
  }

  private meetsCapacity(room: Room, booking: Booking): boolean {
    return !('guests' in booking) || room.capacity >= (booking as any).guests;
  }

  private meetsAmenities(room: Room, booking: Booking): boolean {
    return !('amenities' in booking) ||
      (booking as any).amenities.every((amenity: string) =>
        room.amenities.includes(amenity)
      );
  }

  private validateBookingParams(params: Booking): void {
    if (!params.fromDate || !params.toDate) {
      throw new Error('Both fromDate and toDate are required');
    }

    if (params.fromDate > params.toDate) {
      throw new Error('fromDate cannot be after toDate');
    }

    if ((params as any).guests && (params as any).guests <= 0) {
      throw new Error('Number of guests must be positive');
    }
  }

  private simulateApiResponse<T>(data: T, delayMs: number): Observable<T> {
    return of(data).pipe(delay(delayMs));
  }

  private simulateErrorResponse(error: unknown): Observable<never> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.error(error);
      }, 300);
    });
  }
}
