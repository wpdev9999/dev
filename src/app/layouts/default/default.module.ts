import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AuthModule } from 'src/app/auth/auth.module';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule
  ]
})
export class DefaultModule { }
