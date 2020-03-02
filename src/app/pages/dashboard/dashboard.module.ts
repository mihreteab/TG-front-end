import { NgModule } from '@angular/core';
import {GaugesModule} from 'ng-canvas-gauges';
import { ChartModule } from 'angular2-chartjs';
import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { MomentTimezoneModule } from 'angular-moment-timezone';
import { NgxEchartsModule } from 'ngx-echarts';
import { LiveChartComponent } from './components/live-chart/live-chart.component';
import { MslaComponent } from './components/msla/msla.component';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    GaugesModule,
    MomentTimezoneModule,
    ChartModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    LiveChartComponent,
    MslaComponent,
  ],
})
export class DashboardModule { }
