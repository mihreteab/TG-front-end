import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    FormsModule,
    ThemeModule,
    RouterModule
  ]
})
export class ForgotPasswordModule { }
