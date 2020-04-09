import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsModule } from 'ng2-charts';
import { SensorsModule } from './sensors/sensors.module';
import { SettingComponent } from './setting/setting.component';
import { HistoricalComponent } from './historical/historical.component';
import { MapsComponent } from './maps/maps.component';
import { UserAccountComponent } from './user-account/user-account.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NgxEchartsModule,
    ChartsModule,
    MiscellaneousModule,
    DashboardModule,
    SensorsModule,
  ],
  declarations: [
    PagesComponent,
    SettingComponent,
    HistoricalComponent,
    MapsComponent,
    UserAccountComponent,
  ],
})
export class PagesModule {
}
