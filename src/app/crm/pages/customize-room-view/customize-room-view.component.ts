import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IotService } from '../../../guest-experience/services/iot-devices.service';
import { BookService } from '../../services/book-service.service';
import { IotDevice } from '../../../guest-experience/model/iot-devices.entity';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-customize-room',
  templateUrl: './customize-room-view.component.html',
  styleUrls: ['./customize-room-view.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class CustomizeRoomComponent implements OnInit {
  roomId!: number;
  fromDate!: Date;
  toDate!: Date;
  devices: IotDevice[] = [];
  customSettings: { [key: number]: any } = {};

  guestForm: FormGroup;

  scentOptions = ['lavender', 'mint', 'vanilla', 'citric'];
  musicOptions = ['jazz', 'lo-fi', 'classic', 'ambient'];

  constructor(
    private route: ActivatedRoute,
    private iotService: IotService,
    private bookingService: BookService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.guestForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: [''],
      phone: [''],
      country: ['']
    });
  }

  ngOnInit(): void {
    this.roomId = +this.route.snapshot.params['roomId'];
    this.fromDate = new Date(this.route.snapshot.queryParams['from']);
    this.toDate = new Date(this.route.snapshot.queryParams['to']);

    this.loadDevices().then(() => {
      console.log('Devices Loaded:', this.devices);
      this.initializeCustomSettings();

      if (this.devices.length === 0) {
        this.snackBar.open('Devices not founded for this room', 'Close', { duration: 3000 });
      }
    }).catch(error => {
      console.error('Failed to load:', error);
      this.snackBar.open('Failed to load devices', 'Close', { duration: 3000 });
    });
  }

  getFormControlError(controlName: string, errorName: string): boolean {
    const control = this.guestForm.get(controlName);
    return control?.touched && control.hasError(errorName) || false;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.guestForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  private initializeCustomSettings(): void {
    this.devices.forEach(device => {
      if (device.customizable && !this.customSettings[device.id]) {
        this.customSettings[device.id] = {
          ...device.properties,
          ...(device.type === 'temperature' && { threshold: 22 }),
          ...(device.type === 'light' && { brightness: 50, color: '#ffffff' }),
          ...(device.type === 'curtain' && { open: false }),
          ...(device.type === 'aroma' && { intensity: 3, scent: this.scentOptions[0] }),
          ...(device.type === 'music' && { volume: 50, source: this.musicOptions[0] }),
          initialized: true
        };
      }
    });
  }

  async loadDevices() {
    try {
      const room = await lastValueFrom(this.bookingService.getRoomById(this.roomId));
      if (room?.iotDeviceIds) {
        const devices = await lastValueFrom(this.iotService.getDevicesByIds(room.iotDeviceIds));
        this.devices = devices || [];

        this.devices.forEach(device => {
          this.customSettings[device.id] = { ...device.properties };
        });
      }
    } catch (error) {
      console.error('Error loading devices:', error);
      this.snackBar.open('Failed Loading IoT devices', 'Close', { duration: 3000 });
    }
  }

  confirmReservation() {
    if (this.guestForm.invalid) {
      this.snackBar.open('Please fill all spaces correctly', 'Close', { duration: 3000 });
      return;
    }

    const reservation = {
      guest: this.guestForm.value,
      roomId: this.roomId,
      fromDate: this.fromDate,
      toDate: this.toDate,
      devices: this.customSettings
    };

    console.log('Booking confirmed:', reservation);
    this.snackBar.open('¡Reserve registered!', 'Close', { duration: 3000 });
  }

  deviceIcon(type: string): string {
    switch (type) {
      case 'temperature':
        return 'thermostat';
      case 'light':
        return 'lightbulb';
      case 'curtain':
        return 'window';
      case 'aroma':
        return 'spa';
      case 'music':
        return 'music_note';
      case 'fridge':
        return 'kitchen';
      default:
        return 'devices_other';
    }
  }
}
