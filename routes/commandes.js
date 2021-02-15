const express = require('express');
const Commande = require('../model/commande.model');
const Produit = require('../model/produits.model');
require('../model/tva');
const router = express.Router();

module.exports = () => {
  router.get('/', async (req, res) => {
    Produit.getNomsProduits((err, products) => {
      if (err) throw err;
      else {
        Commande.getAll((err, results) => {
          if (err) throw err;
          else {
            let commandes = results;
            commandes.forEach((commande) => {
              commande.prix = prix_produit_TVA(commande.prix_hors_taxe, commande.tva, commande.quantite);
            });
            res.render('tables', { results: commandes, produits: products, title: 'Commandes' });
          }
        });
      }
    });
  });

  router.get('/edit', async (req, res) => {
    Commande.getAll((err, results) => {
      if (err) throw err;
      else {
        res.render('edit_commandes', { results: results, title: 'Editer Produit' });
      }
    });
  });
  return router;
};
