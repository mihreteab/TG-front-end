import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';

import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    ThemeModule,
    LoginModule,
    SignupModule,
    ForgotPasswordModule
  ]
})
export class AuthModule { }
