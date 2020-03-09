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
    speed: 125,
    acceleration: 12,
    msla: 12,
    heading: 770,
    reading: [
      {
        timestamp: '2020-03-05T07:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 33,
        humidity: 81,
        ammonia: 35,
        co2: 31,
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 26,
        humidity: 88,
        ammonia: 41,
        co2: 34,
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 35,
        humidity: 89,
        ammonia: 34,
        co2: 33,
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 33,
        humidity: 85,
        ammonia: 37,
        co2: 39,
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 39,
        humidity: 85,
        ammonia: 34,
        co2: 37,
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 44,
        humidity: 77,
        ammonia: 31,
        co2: 33,
      },
      {
        timestamp: '2020-03-05T07:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 34,
        humidity: 84,
        ammonia: 31,
        co2: 33,
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 38,
        humidity: 84,
        ammonia: 39,
        co2: 38,
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 34,
        humidity: 85,
        ammonia: 36,
        co2: 32,
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 33,
        humidity: 86,
        ammonia: 34,
        co2: 34,
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 41,
        humidity: 81,
        ammonia: 38,
        co2: 36,
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 37,
        humidity: 91,
        ammonia: 37,
        co2: 38,
      },
      {
        timestamp: '2020-03-05T07:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 23,
        humidity: 80,
        ammonia: 36,
        co2: 36,
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 37,
        humidity: 80,
        ammonia: 33,
        co2: 33,
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 35,
        humidity: 84,
        ammonia: 35,
        co2: 34,
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 39,
        humidity: 87,
        ammonia: 33,
        co2: 37,
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 35,
        humidity: 84,
        ammonia: 37,
        co2: 37,
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 37,
        humidity: 80,
        ammonia: 35,
        co2: 38,
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
