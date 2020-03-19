import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorService } from '../../@core/mock/sensor.service';
import { SensorDevice } from '../../@core/data/sensor';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit, OnDestroy {
  private interval: any;
  private labels$: any;
  private devices: SensorDevice[] = [];
  constructor(private sensorService: SensorService) {
  }

  ngOnInit() {
    this.labels$ = this.sensorService.getLabels();
    this.sensorService.generateRandomData().subscribe(res => {
      this.devices = res;
    });
    this.interval = setInterval(() => {
      this.sensorService.generateRandomData().subscribe(res => {
        this.devices = res;
      })
    }, 10000)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
