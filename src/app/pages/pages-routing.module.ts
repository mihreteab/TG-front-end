import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { SensorsComponent } from './sensors/sensors.component';
import { HistoricalComponent } from './historical/historical.component';
import { SettingComponent } from './setting/setting.component';
import { UserAccountComponent } from  './setting/user-account/user-account.component';
import { MapComponent } from './map/map.component';
import { GoogleMapComponent } from './map/google-map/google-map.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'historical',
      component: HistoricalComponent,
    },
    {
      path: 'setting',
      component: SettingComponent,
      children:[
        {
          path: 'user-account',
          component: UserAccountComponent,
        },
      ]

    },
    {
      path: 'maps',
      component: MapComponent,
      children: [
        {
          path: 'google-map',
          component: GoogleMapComponent
        }
      ]
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'sensors',
      component: SensorsComponent,
    },
    {
      path: 'report',
      component: ReportComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
