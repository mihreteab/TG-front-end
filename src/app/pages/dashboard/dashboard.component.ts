import {Component, OnDestroy, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SensorService } from '../../@core/mock/sensor.service';
import { SensorData } from '../../@core/data/sensor';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  sensor: SensorData;
  map: mapboxgl.Map;

  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor(private sensorService: SensorService) {

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
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'It\'s the test for popup'
      );

    new mapboxgl.Marker()
      .setLngLat({
        lat: this.lat,
        lng: this.lng
      })
      .setPopup(popup)
      .addTo(this.map);
  }

  ngOnDestroy() {
  }
}
