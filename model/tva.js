prix_produit_TVA = (prix_produit_HT, tva, qt) => {
  if (prix_produit_HT <= 0) {
    throw new TypeError('le prix doit être supérieur à 0');
  }
  if (qt <= 0) {
    throw new TypeError('la quantité doit être supérieur à 0');
  }
  return prix_produit_HT * (1 + tva / 100) * qt;
};

module.exports = prix_produit_TVA;
