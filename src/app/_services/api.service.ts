import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AwsConfig } from 'src/environments/aws.config';
import { API, Auth } from "aws-amplify";
import { AuthService } from './auth.service';

@Injectable( { providedIn: 'root' } )
export class ApiService {

  private _helloWorldResult: String;

  private _authHeader = async () => { 
      Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
    };

  constructor(private router : Router, private awsConfig : AwsConfig, public authService : AuthService) {  
    authService.loadUserInfo();   
    this._helloWorldResult = '';   
  }

  public async callHelloWorld() {
    let request = { 
        headers: this._authHeader
      };
    this._helloWorldResult = await API.post('HelloWorldAPI', '/', request);
    console.log(this._helloWorldResult);
    alert(this._helloWorldResult['body']);
  }

}