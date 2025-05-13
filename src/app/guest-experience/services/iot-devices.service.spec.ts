import { TestBed } from '@angular/core/testing';

import { IotDevicesService } from './iot-devices.service';

describe('IotDevicesServiceService', () => {
  let service: IotDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IotDevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
