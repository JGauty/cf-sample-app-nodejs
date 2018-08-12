const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cf-nodejs-silly-mandrill.cfapps.io/');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
