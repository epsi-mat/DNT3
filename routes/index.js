const express = require('express');
const commandesRoute = require('./commandes');

const router = express.Router();

module.exports = () => {
  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'PreudHomme' });
  });

  /* GET register page. */
  router.get('/register', function (req, res, next) {
    res.render('register', { title: 'Inscription' });
  });
  /* GET login page. */
  router.get('/login', function (req, res, next) {
    res.render('login', { title: 'Connexion' });
  });

  router.get('/error', function (req, res, next) {
    res.render('error', { title: 'Erreur 404' });
  });

  router.use('/commandes', commandesRoute());

  return router;
};
