import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullDashboardComponent } from './full-dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';




@NgModule({
  declarations: [
    FullDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DashboardModule
  ],
})
export class FullDashboardModule { }
