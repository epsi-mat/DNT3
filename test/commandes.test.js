const puppeteer = require('puppeteer');

describe('Admin page Suite', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
  });

  test('should be Index page', async () => {
    await expect(page.title()).resolves.toMatch('PreudHomme');
  });

  test('should Commandes page ', async () => {
    await page.goto('http://localhost:3000/commandes');
    await expect(page.title()).resolves.toMatch('Commandes');
  });
});
