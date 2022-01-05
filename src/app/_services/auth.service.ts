import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AwsConfig } from 'src/environments/aws.config';
import { Amplify, Auth, Hub, Logger } from "aws-amplify";


@Injectable( { providedIn: 'root' } )
export class AuthService {

  private _state: any
  private _user: any
  private _userInfo: any
  private _authenticated: boolean;

  constructor(private router : Router, private awsConfig : AwsConfig) {  
    this._authenticated = false; 
    Amplify.configure({
      Auth: this.awsConfig.authConfig});
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
          case 'signIn':
              this.setState({authState: 'signedIn', authData: data.payload.data});
              this.loadUserInfo();
              this._authenticated = true;
              break;
          case 'signIn_failure':
              this.setState({authState: 'signIn', authData: null, authError: data.payload.data});
              this._authenticated = false;
              break;
          default:
              break;
      }
    });
    this.login();
  }

  public async login() {
    console.log("Login Method Called");
    await Auth.currentAuthenticatedUser()
      .then((v) => { 
        if (v === undefined) {
          Auth.federatedSignIn();
        } else {
          this._authenticated = true;
          if (this._user === undefined) {
            this.loadUserInfo();
          }
        }
        })
      .catch(() => { 
        Auth.federatedSignIn(); }); 
  }

  public logout() {
    Auth.signOut();
  }

  public async loadUserInfo() {
    this._user = await Auth.currentAuthenticatedUser();
    this._userInfo = await Auth.currentUserInfo();
  }

  public getState() {
    return this._state;
  } 

  public setState(state) {
    this._state = state;
  }

  public getCurrentUserEmail() {
    if (this._userInfo === undefined) {
      return "";
    } else {
      return this._userInfo.attributes.email;
    }
  }

  public getCurrentUserName() {
    if (this._userInfo === undefined) {
      return "";
    } else {
      return this._userInfo.attributes.name;
    }
  }

  public getCognitoUsername() {
    if (this._user === undefined) {
      return "";
    } else {
      return this._user.getUsername();
    }
  }

  public isAuthenticated() {
    Auth.currentAuthenticatedUser()
      .then(() => { this._authenticated = true; })
      .catch(() => { 
        this._authenticated = false; 
        this.router.navigate(['/']);
        this.login();
      }); 
    return this._authenticated;
  }

  public async isAuthenticatedAsync() {
    return await Auth.currentAuthenticatedUser()
      .then(() => { return true; })
      .catch(() => { 
        this.login();
        return false; 
      });
  }

  public getCurrentUser() {
    return this._user;
  }

  public getCurrentUserInfo() {
    return this._userInfo;
  }

}