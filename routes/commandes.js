const express = require('express');
const router = express.Router();
const Commande = require('../model/commande.model');


router.get('/', async (req, res) => {
    Commande.getAll((err, results) => {
        if (err) throw err;
        else res.render('tables', {results: results, title: 'Commandes'});
    });
});

router.get('/edit', async (req, res) => {
    Commande.getAll((err, results) => {
        if (err) throw err;
        else res.render('edit_commandes', {results: results, title: 'Editer Produit'});
    });
});
module.exports = router;
