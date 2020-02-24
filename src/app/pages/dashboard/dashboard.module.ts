import { NgModule } from '@angular/core';
import {GaugesModule} from 'ng-canvas-gauges';

import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    GaugesModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
