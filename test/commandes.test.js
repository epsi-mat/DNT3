const puppeteer = require('puppeteer');
require('dotenv').config();

describe('Commande page Suite', () => {
  const url = 'http://localhost:' + process.env.PORT;
  test('should be Index page', async () => {
    await page.goto(url);
    await expect(page.title()).resolves.toMatch('PreudHomme');
  });

  test('should be Commandes page ', async () => {
    const adress = url + '/commandes';
    await page.goto(adress);
    await expect(page.title()).resolves.toMatch('Commandes');
  });

  test('should be Commandes page ', async () => {
    const adress = url + '/donotexist';
    await page.goto(adress);
    await expect(page.title()).resolves.toMatch('Error');
  });
});
