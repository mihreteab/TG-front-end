import { NgModule } from '@angular/core';
import {GaugesModule} from 'ng-canvas-gauges';
import { ChartModule } from 'angular2-chartjs';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { MomentTimezoneModule } from 'angular-moment-timezone';
import { NgxEchartsModule } from 'ngx-echarts';
import { MslaComponent } from './components/msla/msla.component';
import { SensorChartComponent } from '../components/sensor-chart/sensor-chart.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    GaugesModule,
    MomentTimezoneModule,
    ChartModule,
    ChartsModule,
    NgxEchartsModule,
    ComponentsModule
  ],
  declarations: [
    DashboardComponent,
    MslaComponent,
  ],
})
export class DashboardModule { }
