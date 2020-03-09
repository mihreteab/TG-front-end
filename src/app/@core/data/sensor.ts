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
}

export abstract class SensorData {
  abstract getSensor(): Observable<SensorType>;
  abstract getFlipped(): Observable<string>;
  abstract setFlipped(type: string): Observable<string>;
}
