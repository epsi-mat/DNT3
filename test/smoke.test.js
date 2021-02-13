const puppeteer = require('puppeteer');

describe('Smoke Test Production Suite', () => {
  const url = 'http://cestki.freeboxos.fr/';

  test('should be Index page', async () => {
    await page.goto(url);
    await expect(page.title()).resolves.toMatch('PreudHomme');
  });

  test('should Commandes page ', async () => {
    await page.goto(url + 'commandes');
    await expect(page.title()).resolves.toMatch('Commandes');
  });

  test('should Connexion page ', async () => {
    await page.goto(url + 'login');
    await expect(page.title()).resolves.toMatch('Connexion');
  });

  test('should Commandes page ', async () => {
    await page.goto(url + 'register');
    await expect(page.title()).resolves.toMatch('Commandes');
  });
});
