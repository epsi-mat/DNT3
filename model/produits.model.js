const mysql = require('mysql2');
require('dotenv').config();

let pool;
if (process.env.NODE_ENV === 'production') {
  pool = mysql.createPool({
    socketPath: process.env.MYSQL_SOCKET,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
  });
} else {
  pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
  });
}

const Produit = function (produit) {
  this.nom_produit = produit.nom_produit;
  this.fournisseur = produit.fournisseur;
  this.prix_hors_taxe = produit.prix_hors_taxe;
  this.tva = produit.tva;
};

Produit.getNomsProduits = (result) => {
  pool.query('SELECT id_produit, produit FROM produit', (err, res) => {
    if (err) throw err;
    result(null, res);
  });
};

module.exports = Produit;
