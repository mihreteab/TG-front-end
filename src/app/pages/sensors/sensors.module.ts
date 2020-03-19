import { NgModule } from '@angular/core';
import { SensorsComponent } from './sensors.component';
import { NbCardModule } from '@nebular/theme';
// import { SensorChartComponent } from '../components/sensor-chart/sensor-chart.component';

@NgModule({
  declarations: [
    SensorsComponent,
    // SensorChartComponent
  ],
  imports: [
    NbCardModule
  ]
})
export class SensorsModule { }
