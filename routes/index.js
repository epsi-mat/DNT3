const express = require('express');
const router = express.Router();
const Commande = require('../model/commande.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PreudHomme' });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Inscription' });
});
/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Connexion' });
});
module.exports = router;

