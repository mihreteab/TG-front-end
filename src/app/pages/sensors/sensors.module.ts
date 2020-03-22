import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SensorsComponent } from './sensors.component';
import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    SensorsComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbSelectModule,
    ComponentsModule
  ]
})
export class SensorsModule { }
