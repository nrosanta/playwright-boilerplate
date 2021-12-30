import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { ApiService } from './_services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-merlin-ui';

  constructor(public auth: AuthService, public api: ApiService) {
    auth.login();
  }

  helloWorld() {
    this.api.callHelloWorld();
  }

}
