const express = require('express');
const Commande = require('../model/commande.model');
require('../model/tva');
const router = express.Router();

module.exports = () => {
  router.get('/', async (req, res) => {
    Commande.getAll((err, results) => {
      if (err) throw err;
      else {
        let products = results;
        products.forEach((product) => {
          product.prix = prix_produit_TVA(product.prix_hors_taxe, product.tva, product.quantite);
        });
        res.render('tables', { results: products, title: 'Commandes' });
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
  router.get('/insert', async (req, res) => {
    const commande = function (commande) {
      this.quantite = req.body.quantite;
      this.id_produit = req.body.id_produit;
    };
    Commande.insert(commande, res);
    res.redirect('/commandes');
  });
  router.get('/:id', async (req, res) => {
    Commande.delete(req.params.id);
    res.redirect('/commandes');
  });
  return router;
};
