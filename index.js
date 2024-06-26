const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://visa.vfsglobal.com/gbr/en/aut/login");

  await page.waitForSelector("#mat-input-0");

  await page.type("#mat-input-0", "amehsolomon.aso@gmail.com", { delay: 100 });
  await page.waitForSelector(
    "body > app-root > div > div > app-login > section > div > div > mat-card > form > div:nth-child(2) > mat-form-field"
  );
  await page.type("mat-form-field.ng-tns-c64-1", "Qwertyuiop@2024", {
    delay: 100,
  });
  //   await page.click(".btn.btn-primary");
  //   await browser.close();
})();
