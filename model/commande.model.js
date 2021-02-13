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
