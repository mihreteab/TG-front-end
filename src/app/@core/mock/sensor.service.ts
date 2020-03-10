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
        ammonia: 1500,
        co2: 1540,
        vibration: 0.4
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 26,
        humidity: 88,
        ammonia: 1550,
        co2: 1600,
        vibration: 0.42
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 35,
        humidity: 89,
        ammonia: 1530,
        co2: 1580,
        vibration: 0.41
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 33,
        humidity: 85,
        ammonia: 1540,
        co2: 1580,
        vibration: 0.43
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 39,
        humidity: 85,
        ammonia: 1490,
        co2: 1590,
        vibration: 0.42
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3333',
        sensor: 'Sensor 1',
        temperature: 44,
        humidity: 77,
        ammonia: 1495,
        co2: 1580,
        vibration: 0.42
      },
      {
        timestamp: '2020-03-05T07:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 34,
        humidity: 84,
        ammonia: 1515,
        co2: 1530,
        vibration: 0.44
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 38,
        humidity: 84,
        ammonia: 1530,
        co2: 1510,
        vibration: 0.41
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 34,
        humidity: 85,
        ammonia: 1520,
        co2: 1500,
        vibration: 0.43
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 33,
        humidity: 86,
        ammonia: 1530,
        co2: 1510,
        vibration: 0.41
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 41,
        humidity: 81,
        ammonia: 1510,
        co2: 1540,
        vibration: 0.39
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3331',
        sensor: 'Sensor 2',
        temperature: 37,
        humidity: 91,
        ammonia: 1550,
        co2: 1560,
        vibration: 0.42
      },
      {
        timestamp: '2020-03-05T07:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 23,
        humidity: 80,
        ammonia: 1530,
        co2: 1540,
        vibration: 0.41
      },
      {
        timestamp: '2020-03-05T08:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 37,
        humidity: 80,
        ammonia: 1540,
        co2: 1550,
        vibration: 0.40
      },
      {
        timestamp: '2020-03-05T09:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 35,
        humidity: 84,
        ammonia: 1550,
        co2: 1520,
        vibration: 0.43
      },
      {
        timestamp: '2020-03-05T10:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 39,
        humidity: 87,
        ammonia: 1530,
        co2: 1510,
        vibration: 0.41
      },
      {
        timestamp: '2020-03-05T11:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 35,
        humidity: 84,
        ammonia: 1540,
        co2: 1530,
        vibration: 0.43
      },
      {
        timestamp: '2020-03-05T12:00',
        serial: 'ESCIS3332',
        sensor: 'Sensor 3',
        temperature: 37,
        humidity: 80,
        ammonia: 1550,
        co2: 1550,
        vibration: 0.45
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
