import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import { environment } from '../../../environments/environment';
import { takeUntil, map, takeWhile, switchMap } from 'rxjs/operators';
import { Subject, Observable, interval } from 'rxjs';
import { SensorService } from '../../@core/mock/sensor.service';
import { ChartService } from '../../@core/mock/chart.service';

import * as mapboxgl from 'mapbox-gl';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { LiveChart } from '../../@core/data/chart';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  private alive = true;

  private intervalSubscription: any;
  sensor$: any;
  map: mapboxgl.Map;

  themeSubscription: any;

  speedLiveChartData: any;

  msla$: Observable<number>;
  speed$: Observable<number>;
  acceleration$: Observable<number>;
  compass$: Observable<number>;

  constructor(
    private sensorService: SensorService,
    private chartService: ChartService,
    private theme: NbThemeService,
  ) {

  }

  ngOnInit() {
    this.sensor$ = this.sensorService.getSensor()

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

    
    this.getLiveChartData();
  }

  private getLiveChartData() {

    this.chartService.getInitialLiveChartData('speed')
      .pipe(takeWhile(() => this.alive))
      .subscribe((data: any) => {
        this.speedLiveChartData = data.liveChart;
        this.startReceivingLiveData('speed');
      })
  }

  startReceivingLiveData(type: string) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.chartService.getLiveChartData(type)),
      )
      .subscribe((liveChartData: any[]) => {
        this.speedLiveChartData = [...liveChartData];
      });
  }



  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      this.msla$ = interval(1000).pipe(
        map(() => Math.floor(Math.random() * 100) + 1500)
      );
  
      this.speed$ = interval(1000).pipe(
        map(() => Math.floor(Math.random() * 20) + 80)
      );
  
      this.acceleration$ = interval(1000).pipe(
        map(() => Math.random() + 0.2)
      );
  
      this.compass$ = interval(1000).pipe(
        map(() => Math.floor(Math.random() * 120) + 20)
      );

    });
  }

  ngOnDestroy() {
  }
}
