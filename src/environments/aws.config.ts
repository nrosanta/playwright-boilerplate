import { Auth } from "aws-amplify";
import { Injectable } from "@angular/core";

@Injectable()
export class AwsConfig {
        
    private _authConfig = {
        region: 'us-east-1',
        userPoolId: 'us-east-1-test',
        identityPoolId: 'test',
        userPoolWebClientId: '3ksst9434hpe0g35lq4dbqobp0',
        oauth: {
            domain: 'test.com',
            scope: ['openid', 'email', 'profile', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'https://localhost:4200/',
            redirectSignOut: 'https://localhost:4200',
            responseType: 'code'
        }
    }

    public get authConfig() {
        return this._authConfig;
    }
       
}
