import test from '../helpers/BaseTest';

test.describe("@smoke Service Health Sample Test", () => {

    test.beforeEach(async ( { serviceHealthHome }) => {
        await serviceHealthHome.navigateToURL();
        await serviceHealthHome.signIntoIDP(); //login
    });

    test('should show correct App header', async ({ serviceHealthHome }) => {
        await serviceHealthHome.verifyHeader();
    });

    test('should load sample Chart', async ({ serviceHealthHome }) => {
        await serviceHealthHome.verifyChartLoad();
    });

    test('should display correct page title', async ({ serviceHealthHome }) => {
        await serviceHealthHome.verifyPageTitle();
    });
    
});