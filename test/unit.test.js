require('../model/tva');

it('Test TVA', () => {
  expect(prix_produit_TVA(55, 20, 1)).toBe(66);
  expect(prix_produit_TVA(13, 20, 2)).toBe(31.2);
});

test('Test error TVA', () => {
  function prix0() {
    prix_produit_TVA(0, 20, 1);
  }
  function qt0() {
    prix_produit_TVA(13, 20, 0);
  }
  expect(prix0).toThrow('le prix doit être supérieur à 0');
  expect(qt0).toThrow('la quantité doit être supérieur à 0');
});
