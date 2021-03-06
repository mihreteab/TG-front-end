import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { SensorService } from './sensor.service';
import { ChartService } from './chart.service';

const SERVICES = [
  UserService,
  SensorService,
  ChartService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
