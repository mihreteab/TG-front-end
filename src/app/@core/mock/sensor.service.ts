import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';
import { SensorData, SensorType } from '../data/sensor';

@Injectable()
export class SensorService extends SensorData {

  private sensor: SensorType = {
    timestamp: new Date(),
    serial: 'UUSSXEW',
    gpsPosition: {
      lat: 12.404034,
      lng: -120.32333
    },
    speed: 125,
    acceleration: 12,
    msla: 12,
    heading: 770,
    reading: [
      {
        timestamp: new Date(),
        serial: 'ESCIS3333',
        temperature: 23,
        humidity: 80,
      }
    ],
  };

  getSensor(): Observable<any> {
    return observableOf(this.sensor);
  }
}
