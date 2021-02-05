const dbConfig =  require("./db")
const mysql = require("mysql2");

let pool = mysql.createPool({
    socketPath: dbConfig.SOCKET,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

const Commande = function(commande) {
    this.nom_produit = commande.nom_produit
    this.date_commande = commande.date_commande
    this.date_livraison = commande.date_livraison
    this.fournisseur = commande.fournisseur
    this.prix_produit = commande.prix_produit
}

Commande.getAll = result => {
    pool.query("SELECT * FROM commande", (err, res) => {
        if (err) throw err;
        result(null, res);
    });
};

module.exports = Commande;