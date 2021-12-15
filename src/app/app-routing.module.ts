import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DefaultComponent } from './layouts/default/default.component';
import { FullDashboardComponent } from './layouts/full-dashboard/full-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
        path: '', loadChildren: () =>  AuthModule}
      ]
  },
  {
    path: '',
    component: FullDashboardComponent,
    children: [
      { path: 'dashboard', canActivate:[AuthGuard], loadChildren: () =>  DashboardModule},
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
