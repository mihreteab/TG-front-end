import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ChartData, LiveChart } from '../data/chart';
import { NbColorHelper } from '@nebular/theme';
import * as moment from 'moment-timezone';

@Injectable()
export class ChartService {
  private labels = [];
  private colors = ['#3366ff', '#ff3d71', '#0095ff'];
  
  private ammoniaChart = [];

  private co2Chart = [];
  private vibrationChart = [];

  generateRandom (from: number, to: number, random: number = Math.random(), decimal: number = 0) {
    if (decimal === 0) {
      return Math.floor(random * (to - from)) + from;
    } else {
      return Number((random * (to - from) + from).toFixed(decimal))
    }
  }

  generateInitialChartData (from: number, to: number, decimal: number = 0) {
    const data = [];
    for (let i = 0; i < 5; i += 1) {
      data.push(this.generateRandom(from, to, Math.random(), decimal))
    }

    return data;
  }

  generateInitialChartDatasets (from: number, to: number, decimal: number = 0) {
    const datasets = [];
    for (let i = 0; i < 3; i += 1) {
      datasets.push({
        label: `Sensor ${i + 1}`,
        data: this.generateInitialChartData(from, to, decimal),
      })
    }

    return datasets;
  }

  generateInitialLabels () {
    for (let i = 4; i >= 0; i -= 1) {
      this.labels.push(moment().subtract(10 * i, 'seconds').format('hh:mm:ss'));
    }
  }

  getInitialLiveChartData() {
    const random = Math.random();
    this.generateInitialLabels();

    this.ammoniaChart = this.generateInitialChartDatasets(0, 5000)

    this.co2Chart = this.generateInitialChartDatasets(150, 20000)

    this.vibrationChart = this.generateInitialChartDatasets(0.01, 1, 2);

    return observableOf({
      speed: this.generateRandom(0, 120, random),
      acceleration: 1,
      heading: this.generateRandom(120, 125, random),
      msla: this.generateRandom(225, 700, random),
      temperature: this.generateRandom(-20, 10),
      humidity: this.generateRandom(20, 80),
      temperatureBattery: this.generateRandom(0, 100),
      ammoniaBattery: this.generateRandom(0, 100),
      co2Battery: this.generateRandom(0, 100),
      vibrationBattery: this.generateRandom(0, 100),
      ammoniaChart: this.ammoniaChart,
      co2Chart: this.co2Chart,
      vibrationChart: this.vibrationChart,
      labels: this.labels,
    });
  }

  getLiveChartData(): Observable<any> {
    const random = Math.random();

    this.labels.push(moment().format('hh:mm:ss'));
    this.labels.shift();

    this.ammoniaChart.map(dataset => {
      dataset.data.push(this.generateRandom(0, 5000))
      dataset.data.shift();

      return dataset;
    })

    this.co2Chart.map(dataset => {
      dataset.data.push(this.generateRandom(150, 20000))
      dataset.data.shift();      
      return dataset;
    })

    this.vibrationChart.map(dataset => {      
      dataset.data.push(this.generateRandom(0.01, 1, Math.random(), 2))
      dataset.data.shift();      
      return dataset;
    })
    

    return observableOf({
      speed: this.generateRandom(0, 120, random),
      acceleration: 1,
      heading: this.generateRandom(120, 125, random),
      msla: this.generateRandom(225, 700, random),
      temperature: this.generateRandom(-20, 10),
      humidity: this.generateRandom(20, 80),
      temperatureBattery: this.generateRandom(0, 100),
      ammoniaBattery: this.generateRandom(0, 100),
      co2Battery: this.generateRandom(0, 100),
      vibrationBattery: this.generateRandom(0, 100),
      ammoniaChart: this.ammoniaChart,
      co2Chart: this.co2Chart,
      vibrationChart: this.vibrationChart,
      labels: this.labels
    });
  }
}
