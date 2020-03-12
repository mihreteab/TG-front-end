import { of as observableOf,  Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';
import { SensorData, SensorType } from '../data/sensor';

@Injectable()
export class SensorService extends SensorData {

  private sensor: SensorType = {
    timestamp: new Date(),
    serial: 'UUSSXEW',
    gpsPosition: {
      lat: 37.6986502,
      lng: -122.4640427
    },
    speed: 80,
    acceleration: 1,
    msla: 300,
    heading: 770,
    reading: [
      {
        timestamp: '2020-03-05T07:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 33,
        humidity: 81,
        ammonia: 4950,
        co2: 1880,
        vibration: 0.85
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 26,
        humidity: 88,
        ammonia: 4900,
        co2: 1870,
        vibration: 0.92
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 35,
        humidity: 89,
        ammonia: 4960,
        co2: 1880,
        vibration: 0.91
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 33,
        humidity: 85,
        ammonia: 4920,
        co2: 1880,
        vibration: 0.88
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 39,
        humidity: 85,
        ammonia: 4860,
        co2: 1890,
        vibration: 0.89
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 44,
        humidity: 77,
        ammonia: 4960,
        co2: 1880,
        vibration: 0.91
      },
      {
        timestamp: '2020-03-05T07:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 34,
        humidity: 84,
        ammonia: 4950,
        co2: 1930,
        vibration: 0.91
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 38,
        humidity: 84,
        ammonia: 4930,
        co2: 1910,
        vibration: 0.86
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 34,
        humidity: 85,
        ammonia: 4860,
        co2: 1900,
        vibration: 0.88
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 33,
        humidity: 86,
        ammonia: 4880,
        co2: 1910,
        vibration: 0.88
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 41,
        humidity: 81,
        ammonia: 4950,
        co2: 1840,
        vibration: 0.90
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 37,
        humidity: 91,
        ammonia: 4860,
        co2: 1860,
        vibration: 0.93
      },
      {
        timestamp: '2020-03-05T07:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 23,
        humidity: 80,
        ammonia: 4860,
        co2: 1940,
        vibration: 0.91
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 37,
        humidity: 80,
        ammonia: 4940,
        co2: 1890,
        vibration: 0.90
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 35,
        humidity: 84,
        ammonia: 4880,
        co2: 1920,
        vibration: 0.93
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 39,
        humidity: 87,
        ammonia: 4860,
        co2: 1910,
        vibration: 0.87
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 35,
        humidity: 84,
        ammonia: 4940,
        co2: 1930,
        vibration: 0.91
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 37,
        humidity: 80,
        ammonia: 4870,
        co2: 1850,
        vibration: 0.92
      }
    ],
  };

  private flipped = '';

  changes:EventEmitter<any> = new EventEmitter();

  getSensor(): Observable<any> {
    return observableOf(this.sensor);
  }
  
  getFlipped(): Observable<string> {
    return observableOf(this.flipped);
  }

  setFlipped(type: string): Observable<string> {
    if (this.flipped === type) {
      this.flipped = ''
    } else {
      this.flipped = type;
    }
    this.changes.emit(this.flipped);
    return observableOf(this.flipped);
  }
}
