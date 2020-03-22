import { Observable } from 'rxjs';

export interface SensorType {
  timestamp: Date;
  serial: string;
  gpsPosition: PositionType;
  speed: number;
  acceleration: number;
  msla: number;
  heading: number;
  reading: ReadingType[]
}

export interface PositionType {
  lat: number;
  lng: number;
}

export interface ReadingType {
  timestamp: Date | string;
  serial: string;
  sensor: string;
  temperature: number;
  humidity: number;
  ammonia: number;
  co2: number;
  vibration: number;
}

export type SensorDeviceType = 'temperature' | 'humidity' | 'ammonia' | 'co2' | 'vibration';
export type IcdDeviceType = 'gf780' | 'samsung' | 'ttb';

export interface IcdDevice {
  label: string;
  value: IcdDeviceType;
}


export interface SensorDevice {
  name: string;
  icd: string;
  type: SensorDeviceType;
  datasets: any[];
  battery: number;
  currentValue: number;
  unit: string;
  min: number;
  max: number;
}

export abstract class SensorData {
  abstract getSensor(): Observable<SensorType>;
  abstract getDevices(): Observable<IcdDevice[]>;
  abstract getSelectedDevice(): Observable<string>;
  abstract setSelectedDevice(value: string): Observable<string>;
  abstract getSelectedSensors(): Observable<SensorDevice[]>;
}
