import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './_services/auth.service';
import { ApiService } from './_services/api.service';
import { AwsConfig } from 'src/environments/aws.config';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'angular2-chartjs';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ChartModule,
    NgChartsModule
  ],
  providers: [AwsConfig, AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
