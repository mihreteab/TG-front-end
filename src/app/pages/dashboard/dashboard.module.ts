import { NgModule } from '@angular/core';
import {GaugesModule} from 'ng-canvas-gauges';

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
    MomentTimezoneModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
