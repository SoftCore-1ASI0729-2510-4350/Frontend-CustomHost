// src/app/models/booking.model.ts
export class MyBooking {
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
  preferences: {
    temperature: number;
    lighting: {
      brightness: number;
      color: string;
    };
    curtains: string;
    tvVolume: number;
  };
  appliedDevicePreferences: number[];

  constructor(data: any) {
    this.id = data.id;
    this.userId = data.userId;
    this.hotelId = data.hotelId;
    this.roomId = data.roomId;
    this.checkInDate = data.checkInDate;
    this.checkOutDate = data.checkOutDate;
    this.status = data.status;
    this.totalPrice = data.totalPrice;
    this.paymentStatus = data.paymentStatus;
    this.specialRequests = data.specialRequests;
    this.createdAt = data.createdAt;
    this.preferences = data.preferences;
    this.appliedDevicePreferences = data.appliedDevicePreferences;
  }
}
