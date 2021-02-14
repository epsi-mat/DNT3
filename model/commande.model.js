const mysql = require('mysql2');
require('dotenv').config();

let pool;
if (process.env.NODE_ENV === 'production') {
  pool = mysql.createPool({
    socketPath: process.env.MYSQL_SOCKET,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE,
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

const Commande = function (commande) {
  this.id_commande = commande.id_commande;
  this.nom_produit = commande.nom_produit;
  this.date_commande = commande.date_commande;
  this.date_livraison = commande.date_livraison;
};

Commande.getAll = (result) => {
  pool.query(
    'SELECT c.id_commande, c.date_commande, c.date_livraison, c.quantite, p.produit, p.prix_hors_taxe, p.tva, p.fournisseur FROM commande c INNER JOIN produit p ON c.id_produit = p.id_produit',
    (err, res) => {
      if (err) throw err;
      result(null, res);
    }
  );
};

module.exports = Commande;
