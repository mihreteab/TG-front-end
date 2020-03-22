import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorChartComponent } from './sensor-chart/sensor-chart.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import { ChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { GaugesModule } from 'ng-canvas-gauges';



@NgModule({
  declarations: [
    SensorChartComponent
  ],
  exports: [
    SensorChartComponent
  ],
  imports: [
    CommonModule,
    GaugesModule,
    ChartModule,
    ChartsModule,
    NbIconModule,
    NbCardModule,
    NgxEchartsModule,
  ]
})
export class ComponentsModule { }
