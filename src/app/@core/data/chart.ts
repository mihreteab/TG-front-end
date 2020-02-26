import { Observable } from 'rxjs';

export interface LiveChart {
  liveChart: { value: [string, number] }[];
  delta: {
    up: boolean;
    value: number;
  };
  dailyIncome: number;
}

export abstract class ChartData {
  abstract getLiveChartData(type: string): Observable<any[]>;
}
