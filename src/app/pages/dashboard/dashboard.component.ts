import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import { environment } from '../../../environments/environment';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SensorService } from '../../@core/mock/sensor.service';
import { SensorData } from '../../@core/data/sensor';

import * as mapboxgl from 'mapbox-gl';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  sensor: SensorData;
  map: mapboxgl.Map;

  themeSubscription: any;
  liveSensorsOptions: any = {};
  sensorsData: any = {};

  constructor(private sensorService: SensorService, private theme: NbThemeService) {

  }

  ngOnInit() {
    this.sensorService.getSensor()
      .pipe(takeUntil(this.destroy$))
      .subscribe((sensor: SensorData) => {
        this.sensor = sensor
      });

    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [-122.41, 37.75]
    });

    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'It\'s the test for popup'
      );

    new mapboxgl.Marker()
      .setLngLat({
        lat: 37.75,
        lng: -122.41
      })
      .setPopup(popup)
      .addTo(this.map);
  }


  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.sensorsData = {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }
        ],
      };

      this.liveSensorsOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy() {
  }
}
