import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';

import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    ThemeModule,
    LoginModule
  ]
})
export class AuthModule { }
