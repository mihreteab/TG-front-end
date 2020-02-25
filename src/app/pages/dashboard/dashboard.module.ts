import { NgModule } from '@angular/core';
import {GaugesModule} from 'ng-canvas-gauges';
import { ChartModule } from 'angular2-chartjs';
import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { MomentTimezoneModule } from 'angular-moment-timezone';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    GaugesModule,
    MomentTimezoneModule,
    ChartModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
