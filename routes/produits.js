const dbConfig = require('./db');
const mysql = require('mysql2');

let pool;
if (process.env.NODE_ENV === 'production') {
  pool = mysql.createPool({
    socketPath: dbConfig.SOCKET,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT,
  });
} else if (process.env.NODE_ENV === 'docker') {
  pool = mysql.createPool({
    host: dbConfig.DOCKER_HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT,
  });
} else {
  pool = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT,
  });
}

const Produit = function (produit) {
  this.nom_produit = produit.nom_produit;
  this.fournisseur = produit.fournisseur;
  this.prix_hors_taxe = produit.prix_hors_taxe;
  this.tva = produit.tva;
};

Produit.getNomsProduits = (result) => {
  pool.query('SELECT nom_produit FROM produit', (err, res) => {
    if (err) throw err;
    result(null, res);
  });
};

module.exports = Produit;
