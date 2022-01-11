import { PlaywrightTestConfig } from '@playwright/test';
import { testConfig } from './src/config/testconfig';
let ENV = process.env.ENV;

if(!ENV){
  ENV="default"; //set default environment
}
if (!ENV || !["qa", "dev", "default"].includes(ENV)) {
  console.log('Invalid ENV variable ' + ENV + '!\n"Usage: npx cross-env ENV=qa|dev"');
  process.exit();
}

const config: PlaywrightTestConfig = {

  //Global Setup to run before all tests
  globalSetup: './src/utils/global-setup',

  //Global Teardown to run after all tests
  globalTeardown: './src/utils/global-teardown',

  //sets timeout for each test case
  timeout: 120000,

  //number of retries if test case fails
  retries: 0,

  outputDir: './src/report/data',


  //Reporters
  reporter: [['list'], ['./src/config/reportconfig.ts'], ['allure-playwright'], ['html', { outputFolder: './e2e/src/report/current', open: 'never'}]],

  projects: [
    {
      name: 'SERVICE HEALTH',
      use: {
        // Configure the browser to use.
        browserName: 'chromium',

        //Chrome Browser Config
        channel: 'chrome',

        //Picks Base Url based on User input
        baseURL: testConfig[ENV],

        //Browser Mode
        headless: true,

        //Browser height and width
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        acceptDownloads: true,

        //Artifacts
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        },

        //Reuse authentication state
        storageState: 'e2e/src/config/auth.json',
      },
    },
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        baseURL: testConfig[ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        launchOptions: {
          slowMo: 0
        }
      },
    }
  ],
};
export default config;