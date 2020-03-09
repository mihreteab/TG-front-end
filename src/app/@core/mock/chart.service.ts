import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ChartData, LiveChart } from '../data/chart';

@Injectable()
export class ChartService extends ChartData {

  private currentDate: Date = new Date();
  private currentValue = Math.random() * 1000;
  private ONE_DAY = 24 * 3600 * 1000;

  private liveChartData = {
    speed: {
      liveChart: [],
      delta: {
        up: true,
        value: 4,
      },
      dailyIncome: 45895,
    },
  };

  getDefaultLiveChartData(elementsNumber: number) {
    this.currentDate = new Date();
    this.currentValue = Math.random() * 1000;

    return Array.from(Array(elementsNumber))
      .map(item => this.generateRandomLiveChartData());
  }

  generateRandomLiveChartData() {
    this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
    this.currentValue = this.currentValue + Math.random() * 20 - 11;

    if (this.currentValue < 0) {
      this.currentValue = Math.random() * 100;
    }

    return {
      value: [
        [
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          this.currentDate.getDate(),
        ].join('/'),
        Math.round(this.currentValue),
      ],
    };
  }

  getInitialLiveChartData(type) {
    const data = this.liveChartData[type.toLowerCase()];
    data.liveChart = this.getDefaultLiveChartData(150);

    return observableOf(data);
  }

  getLiveChartData(type): Observable<any[]> {
    const data = this.liveChartData[type.toLowerCase()];
    const newValue = this.generateRandomLiveChartData();

    data.liveChart.shift();
    data.liveChart.push(newValue);

    return observableOf(data.liveChart);
  }
}
