const puppeteer = require('puppeteer');

describe('Smoke Test Production Suite', () => {
  const url = 'http://cestki.freeboxos.fr/';

  test('should be Index page', async () => {
    await page.goto(url);
    await expect(page.title()).resolves.toMatch('PreudHomme');
  });

  test('should be Commandes page ', async () => {
    const adress = url + 'commandes';
    await page.goto(adress);
    await expect(page.title()).resolves.toMatch('Commandes');
  });

  test('should be Connexion page ', async () => {
    const adress = url + 'login';
    await page.goto(adress);
    await expect(page.title()).resolves.toMatch('Connexion');
  });

  test('should be Inscription page ', async () => {
    const adress = url + 'register';
    await page.goto(adress);
    await expect(page.title()).resolves.toMatch('Inscription');
  });

  test('should be 404 page ', async () => {
    const adress = url + 'donotexist';
    await page.goto(adress);
    await expect(page.title()).resolves.toMatch('Erreur 404');
  });
});
