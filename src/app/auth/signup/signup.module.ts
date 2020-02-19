import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    FormsModule,
    ThemeModule,
    RouterModule
  ]
})
export class SignupModule { }
