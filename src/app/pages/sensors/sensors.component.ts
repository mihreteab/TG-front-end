import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorService } from '../../@core/mock/sensor.service';
import { SensorDevice } from '../../@core/data/sensor';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'ngx-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit, OnDestroy {
  private interval: any;
  private labels$: any;
  private devices: SensorDevice[] = [];
  private lodash = _;
  private sortData = [
    {
      label: 'Name',
      value: 'name'
    },
    {
      label: 'Type',
      value: 'type'
    },
    {
      label: 'Value',
      value: 'currentValue'
    },
    { 
      label: 'Battery',
      value: 'battery'
    }
  ];

  private sortBy = 'type';

  constructor(
    private sensorService: SensorService,
    private theme: NbThemeService,
  ) {}

  ngOnInit() {
    this.theme.getJsTheme().subscribe(config => {
      this.labels$ = this.sensorService.getLabels();
      this.sensorService.selectedDeviceEvent.subscribe(res => {
        this.sensorService.generateRandomData().subscribe(res => {
          this.devices = _.sortBy(res, this.sortBy);
        });
      });
      this.sensorService.generateRandomData().subscribe(res => {
        this.devices = _.sortBy(res, this.sortBy);
      });
      this.interval = setInterval(() => {
        this.sensorService.generateRandomData().subscribe(res => {
          this.devices = _.sortBy(res, this.sortBy);
        })
      }, 10000)
    });
  }

  changeSort(type) {
    this.sortBy = type;
    this.devices = _.sortBy(this.devices, [this.sortBy]);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
