import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
  {
    path: 'pages',
    loadChildren: () => PagesModule,
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
