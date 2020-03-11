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
  vibrationChartData: any = {};

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
        this.vibrationChartData = this.generateChartData(data, 'vibration');

        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 13,
          center: [data.gpsPosition.lng, data.gpsPosition.lat]
        });

        map.on('load', function() {
          console.log('test', map);
          map.addSource('route', {
          'type': 'geojson',
          'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
          'type': 'LineString',
          'coordinates': [
                  [-122.463990, 37.698862],
                  [-122.465850, 37.689774],
                  [-122.461784, 37.689788],
                  [-122.461784, 37.689788],
                  [-122.456787, 37.691920],
                  [-122.456364, 37.692499],
                  [-122.456385, 37.693453],
                  [-122.456012, 37.693867],
                  [-122.453069, 37.695129],
                  [-122.450333, 37.698423],
                  [-122.449845, 37.700808],
                  [-122.448954, 37.701445],
                  [-122.448106, 37.701564],
                  [-122.440213, 37.698744],
                  [-122.437145, 37.696778],
                  [-122.434132, 37.695741],
                ]
              }
            }
          });
          map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': 'red',
            'line-width': 4
          }});
        });
    
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'It\'s the test for popup'
          );
    
        new mapboxgl.Marker()
          .setLngLat({
            lat: 37.698862,
            lng: -122.463990
          })
          .setPopup(popup)
          .addTo(map);

        new mapboxgl.Marker()
          .setLngLat({
            lat: 37.695741,
            lng: -122.434132
          })
          .setPopup(popup)
          .addTo(map);
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
