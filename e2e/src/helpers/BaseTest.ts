import { test as base } from '@playwright/test';
import { ServiceHealthHome } from '../pageobjects/pages/serviceHealthHome-po';

const test = base.extend<{
    serviceHealthHome: ServiceHealthHome;

}>({
    serviceHealthHome: async ({ page }, use) => {
        await use(new ServiceHealthHome(page));
    }

});

export default test;