import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorDevice } from '../../@core/data/sensor';
import { SensorService } from '../../@core/mock/sensor.service';
import { NbThemeService } from '@nebular/theme';
import * as _ from 'lodash';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {

  private interval: any;
  private labels$: any;
  private devices: SensorDevice[] = [];
  private lodash = _;
  private sortData = [
    {
      label: 'DATE',
      value: 'date'
    },
    {
      label: 'SIZE',
      value: 'size'
    },
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
