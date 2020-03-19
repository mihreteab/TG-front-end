import { of as observableOf,  Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';
import { SensorData, SensorType, IcdDevice, SensorDevice, SensorDeviceType } from '../data/sensor';

import * as moment from 'moment-timezone';
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

  getSensor(): Observable<any> {
    return observableOf(this.sensor);
  }

  private devices: IcdDevice[] = [
    {
      label: 'Garmin Fleet 780',
      value: 'gf780'
    },
    {
      label: 'Samsung',
      value: 'samsung'
    },
    {
      label: 'TomTom Bridge',
      value: 'ttb'
    }
  ]
  private selectedDevice = 'gf780';
  public selectedDeviceEvent: EventEmitter < string > = new EventEmitter();

  private sensorDevices: SensorDevice[] = [
    {
      icd: 'gf780',
      type: 'temperature',
      name: 'Sensor 1',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'humidity',
      name: 'Sensor 2',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'ammonia',
      name: 'Sensor 3',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'ammonia',
      name: 'Sensor 4',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'ammonia',
      name: 'Sensor 5',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'co2',
      name: 'Sensor 6',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'co2',
      name: 'Sensor 7',
      datasets: [],
      battery: 0,
      currentValue: 0
    },{
      icd: 'gf780',
      type: 'co2',
      name: 'Sensor 8',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'vibration',
      name: 'Sensor 9',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'vibration',
      name: 'Sensor 10',
      datasets: [],
      battery: 0,
      currentValue: 0
    },
    {
      icd: 'gf780',
      type: 'vibration',
      name: 'Sensor 11',
      datasets: [],
      battery: 0,
      currentValue: 0
    },

  ]

  private labels: string[] = [];

  getDevices(): Observable<IcdDevice[]> {
    return observableOf(this.devices);
  }

  getSelectedDevice(): Observable<string> {
    return observableOf(this.selectedDevice)
  }

  setSelectedDevice(value: string): Observable<string> {
    this.selectedDevice = value;
    this.selectedDeviceEvent.emit(this.selectedDevice);
    return observableOf(this.selectedDevice)
  }

  getSelectedSensors(): Observable<SensorDevice[]> {
    const sensorDevices = this.sensorDevices.filter(item => item.icd === this.selectedDevice);
    return observableOf(sensorDevices)
  }

  getLabels(): Observable<string[]> {
    return observableOf(this.labels);
  }

  generateRandom (from: number, to: number,decimal: number = 0, random: number = Math.random()) {
    if (decimal === 0) {
      return Math.floor(random * (to - from)) + from;
    } else {
      return Number((random * (to - from) + from).toFixed(decimal))
    }
  }

  generateRandomDataByDeviceType (type: SensorDeviceType) {
    if (type === 'temperature') {
      return this.generateRandom(-20, 10);
    }

    if (type === 'humidity') {
      return this.generateRandom(20, 80);
    }

    if (type === 'ammonia') {
      return this.generateRandom(0, 5000);
    }

    if (type === 'co2') {
      return this.generateRandom(150, 20000)
    }

    if (type === 'vibration') {
      return this.generateRandom(0.01, 1, 2)
    }

    return 0;
  }

  generateRandomData(): Observable<SensorDevice[]> {
    if (this.labels.length === 0) {
      for (let i = 4; i >= 0; i -= 1) {
        this.labels.push(moment().subtract(10 * i, 'seconds').format('hh:mm:ss'));
      }
    } else {
      this.labels.shift()
      this.labels.push(moment().format('hh:mm:ss'))
    }
    for (const sensorDevice of this.sensorDevices) {
      if (sensorDevice.datasets.length === 0) {
        const data = []
        for (let i = 0; i < 5; i ++) {
          const value = this.generateRandomDataByDeviceType(sensorDevice.type)
          sensorDevice.currentValue = value;
          data.push(value);
        }

        sensorDevice.datasets.push({
          label: sensorDevice.name,
          data: data
        })
      } else {
        const value = this.generateRandomDataByDeviceType(sensorDevice.type);
        sensorDevice.datasets[0].data.shift();
        sensorDevice.datasets[0].data.push(value);
        sensorDevice.currentValue = value;
      }
      sensorDevice.battery = this.generateRandom(0, 100)
    }
    const sensorDevices = this.sensorDevices.filter(item => item.icd === this.selectedDevice);
    return observableOf(sensorDevices)
  }
}
