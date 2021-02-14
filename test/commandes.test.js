const puppeteer = require('puppeteer');
require('dotenv').config();

describe('Commande page Suite', () => {
  const url = 'http://localhost:' + process.env.PORT;
  test('should be Index page', async () => {
    await page.goto(url);
    await expect(page.title()).resolves.toMatch('PreudHomme');
  });

  test('should Commandes page ', async () => {
    await page.goto(url + '/commandes');
    await expect(page.title()).resolves.toMatch('Commandes');
  });
});
