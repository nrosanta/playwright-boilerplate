import { WebActions } from "../../helpers/WebActions";
import type { Page } from 'playwright';

let webActions: WebActions;

export class Home {
    HOME_HEADER = "//h1[contains(text(),'Welcome')]";
    IDP_BUTTON = '.idpButton-customizable:visible'; 
    CJS_CHART = '.chartjs-render-monitor'; 
    TITLE = "//html/head/title";
}

export class ServiceHealthHome {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    homePageObjects = new Home();

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL('/');
    }

    async signIntoIDP(): Promise<void> {
        await webActions.clickElement(this.homePageObjects.IDP_BUTTON);
    }

    async verifyHeader(): Promise<void> {
        await webActions.verifyElementText(this.homePageObjects.HOME_HEADER, 'Welcome to this test app:');
    }

    async verifyChartLoad(): Promise<void> {
        await webActions.verifyElementIsDisplayed(this.homePageObjects.CJS_CHART, "No chart loaded!");
    }

    async verifyPageTitle(): Promise<void> {
        
        await webActions.waitForPageNavigation("domcontentloaded");
        await webActions.expectToBeValue(await webActions.page.title(), "TechMerlinUi",  "Incorrect page title!")
    }

}
