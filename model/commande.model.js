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

const Commande = function (commande) {
  this.id_commande = commande.id_commande;
  this.quantite = commande.quantite;
  this.id_produit = commande.id_produit;
  this.date_commande = commande.date_commande;
  this.date_livraison = commande.date_livraison;
};

Commande.getAll = (result) => {
  pool.query(
    'SELECT c.id_commande, c.date_commande, c.date_livraison, c.quantite, p.produit, p.prix_hors_taxe, p.tva, p.fournisseur, c.id_produit FROM commande c INNER JOIN produit p ON c.id_produit = p.id_produit',
    (err, res) => {
      if (err) throw err;
      result(null, res);
    }
  );
};
Commande.insert = (commande) => {
  pool.query(
    'INSERT INTO commande(quantite, id_produit ) VALUES (?,?)',
    [commande.quantite, commande.id_produit],
    (err) => {
      if (err) throw err;
    }
  );
};
Commande.delete = (id) => {
  pool.query('DELETE FROM commande WHERE id_commande = ?', [id], (err) => {
    if (err) throw err;
  });
};

Commande.updateById = (commande) => {
  pool.query(
    'UPDATE commande SET date_livraison = ? WHERE id_commande = ?',
    [commande.date_livraison, commande.id_commande],
    (err) => {
      if (err) throw err;
    }
  );
};

module.exports = Commande;
