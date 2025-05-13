import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IotDevice, createIotDevice } from '../model/iot-devices.entity';

@Injectable({
  providedIn: 'root'
})
export class IotService {
  private mockDevices: IotDevice[] = [
    createIotDevice({
      id: 1,
      name: "Temperature Sensor",
      type: "sensor",
      customizable: true,
      properties: { unit: "Celsius", threshold: 25 }
    }),
    createIotDevice({
      id: 2,
      name: "Smart Light",
      type: "actuator",
      customizable: true,
      properties: { brightness: 80, color: "warm white" }
    }),
    createIotDevice({
      id: 3,
      name: "Automatic Curtains",
      type: "actuator",
      customizable: true,
      properties: { open: true }
    }),
    createIotDevice({
      id: 4,
      name: "Smart TV",
      type: "actuator",
      customizable: false,
      properties: { apps: ["Netflix", "YouTube"] }
    }),
    createIotDevice({
      id: 5,
      name: "Ambient Sound System",
      type: "actuator",
      customizable: true,
      properties: { volume: 50, source: "jazz" }
    }),
    createIotDevice({
      id: 6,
      name: "Smart Fragrance Diffuser",
      type: "actuator",
      customizable: true,
      properties: { intensity: 3, scent: "lavanda" }
    }),
    createIotDevice({
      id: 7,
      name: "Window Opener",
      type: "actuator",
      customizable: true,
      properties: { open: false }
    }),
    createIotDevice({
      id: 8,
      name: "Room Camera",
      type: "sensor",
      customizable: false,
      properties: { resolution: "1080p" }
    })
  ];

  constructor() { }

  getAllDevices(): Observable<IotDevice[]> {
    return of(this.mockDevices).pipe(
      delay(300)
    );
  }

  getDevicesByIds(ids: number[]): Observable<IotDevice[]> {
    const filteredDevices = this.mockDevices.filter(device => ids.includes(device.id));
    return of(filteredDevices).pipe(
      delay(200)
    );
  }

  getDeviceById(id: number): Observable<IotDevice | undefined> {
    const device = this.mockDevices.find(d => d.id === id);
    return of(device).pipe(
      delay(150)
    );
  }
}
