import * as rimraf from "rimraf";

async function globalSetup() {
    rimraf.sync("./e2e/src/report/allure");
}
export default globalSetup;