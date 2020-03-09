import {Component, OnDestroy, OnInit, AfterViewInit, ɵConsole} from '@angular/core';
import { environment } from '../../../environments/environment';
import { takeUntil, map, takeWhile, switchMap } from 'rxjs/operators';
import { Subject, Observable, interval } from 'rxjs';
import { SensorService } from '../../@core/mock/sensor.service';
import { ChartService } from '../../@core/mock/chart.service';

import * as mapboxgl from 'mapbox-gl';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { LiveChart } from '../../@core/data/chart';
import { SensorType, ReadingType } from '../../@core/data/sensor';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  sensor$: any;
  map: mapboxgl.Map;
  colors: any[];

  themeSubscription: any;
  ammoniaChartData: any = {};
  temperatureChartData: any = {};
  humidityChartData: any = {};
  co2ChartData: any = {};

  constructor(
    private sensorService: SensorService,
    private theme: NbThemeService,
  ) {

  }

  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = [config.variables.primary, config.variables.danger, config.variables.info, config.variables.sucess];
      this.sensor$ = this.sensorService.getSensor()
      this.sensor$.subscribe((data: SensorType) => {
        this.temperatureChartData = this.generateChartData(data, 'temperature');
        this.ammoniaChartData = this.generateChartData(data, 'ammonia');
        this.humidityChartData = this.generateChartData(data, 'humidity');
        this.co2ChartData = this.generateChartData(data, 'co2');

        this.map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 13,
          center: [data.gpsPosition.lng, data.gpsPosition.lat]
        });
    
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'It\'s the test for popup'
          );
    
        new mapboxgl.Marker()
          .setLngLat({
            lat: data.gpsPosition.lat,
            lng: data.gpsPosition.lng
          })
          .setPopup(popup)
          .addTo(this.map);
      });
    });
  }

  generateChartData (sensorData: SensorType, type: string) {
    const reading = sensorData.reading;
    const sensorDataGroupedByTime = _.groupBy(reading, 'timestamp');
    const sensorNames = Object.keys(_.groupBy(reading, 'sensor'));
    const labels = Object.keys(sensorDataGroupedByTime);

    const datasets = sensorNames.map((sensorName: string, index) => {
      const color = this.colors[index%4];
      const dataset = {
        label: sensorName,
        data: [],
        backgroundColor: NbColorHelper.hexToRgbA(color, 0.3),
        borderColor: color,
      }
      const data = [];
      Object.values(sensorDataGroupedByTime).map((sensorDataItem: ReadingType[]) => {
        let value = 0
        const index = sensorDataItem.findIndex(item => item.sensor === sensorName);
        if (index !== -1) {
          value = sensorDataItem[index][type] || 0
        }
        data.push(value);
      });
      dataset.data = data;
      return dataset
    });
    
    return {
      labels: labels.map(label => moment(label).format('hh:mm')),
      datasets
    }
  }

  get dynamicColors () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  ngOnDestroy() {
  }
}
