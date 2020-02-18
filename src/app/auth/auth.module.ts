import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    LoginModule
  ]
})
export class AuthModule { }
