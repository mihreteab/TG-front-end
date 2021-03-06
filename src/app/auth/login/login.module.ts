import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    ThemeModule,
    RouterModule
  ],
})
export class LoginModule { }
