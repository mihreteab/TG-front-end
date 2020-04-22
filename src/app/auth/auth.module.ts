import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';

import { ThemeModule } from '../@theme/theme.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NbLayoutModule, NbLayoutComponent } from '@nebular/theme';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    NbLayoutComponent,
    ForgotPasswordComponent
  ],
  imports: [
    AuthRoutingModule,
    ThemeModule,
    LoginModule,
    SignupModule,
    ForgotPasswordModule
  ]
})
export class AuthModule { }
