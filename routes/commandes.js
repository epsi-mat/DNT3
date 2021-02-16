const express = require('express');
const Commande = require('../model/commande.model');
const Produit = require('../model/produits.model');
require('../model/tva');
const router = express.Router();

module.exports = () => {
  router.get('/', async (req, res) => {
    let editId = req.query.editCommande;
    let delId = req.query.delId;
    if (typeof delId !== 'undefined' && delId) {
      Commande.delete(delId, (err) => {
        if (err) throw err;
        else res.redirect('/commandes');
      });
    }
    Produit.getNomsProduits((err, products) => {
      if (err) throw err;
      else {
        Commande.getAll((err, results) => {
          if (err) throw err;
          else {
            let commandes = results;
            commandes.forEach((commande) => {
              commande.prix = prix_produit_TVA(
                commande.prix_hors_taxe,
                commande.tva,
                commande.quantite
              );
            });
            res.render('tables', {
              editId,
              results: commandes,
              produits: products,
              title: 'Commandes',
            });
          }
        });
      }
    });
  });
  router.post('/edit', async (req, res) => {
    const commande = new Commande({
      id_commande: req.body.id_commande,
      date_livraison: req.body.date_livraison,
    });
    Commande.updateById(commande);
    res.redirect('/commandes');
  });
  router.post('/add', async (req, res) => {
    const commande = new Commande({
      quantite: req.body.quantite,
      id_produit: req.body.id_produit,
    });
    Commande.insert(commande);
    res.redirect('/commandes');
  });
  router.get('/:idcommande', async (req, res) => {
    console.log(req.params.id_commande);
    Commande.delete(req.params.id);
    res.redirect('/commandes');
  });
  return router;
};
