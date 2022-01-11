import * as path from 'path';
import AdmZip from 'adm-zip';

async function globalTeardown() {
    const zip = new AdmZip();
    zip.addLocalFile(path.join(__dirname,"../","report/current/index.html"));
    zip.writeZip(path.join(__dirname,"../","report/archive",new Date().toJSON().slice(0,16) + "_html-report.zip"));
}

export default globalTeardown;