import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { FullDashboardComponent } from './layouts/full-dashboard/full-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
        path: '',
        component: LoginComponent
    }]
  },
  {
    path: '',
    component: FullDashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
