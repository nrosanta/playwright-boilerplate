import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { ApiService } from './_services/api.service';
import { ChartModule } from 'angular2-chartjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playwright-test-sample';
  type = 'line';
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  
  options = {
    responsive: true,
    maintainAspectRatio: false
  }
  

  constructor(public auth: AuthService, public api: ApiService) {
    auth.login();
  }
}
