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
  timestamp: Date;
  serial: string;
  temperature: number;
  humidity: number;
}

export abstract class SensorData {
  abstract getSensor(): Observable<SensorType>;
}
