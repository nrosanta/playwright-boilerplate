export class AwsConfig {
        
    private _authConfig = {
        region: 'us-east-1',
        userPoolId: 'us-east-1_4dKQSHHLN',
        identityPoolId: 'us-east-1:516e0650-f02e-4be0-9eb2-a9e30be377dd',
        userPoolWebClientId: '3ksst9434hpe0g35lq4dbqobp0',
        oauth: {
            domain: 'cci-acoe-tofu-dev.auth.us-east-1.amazoncognito.com',
            scope: ['openid', 'email', 'profile', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'https://localhost:4200/',
            redirectSignOut: 'https://localhost:4200',
            responseType: 'code'
        }
    }

    get authConfig() {
        return this._authConfig;
    }
       
}