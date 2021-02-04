const dbConfig =  require("./db")
const mysql = require("mysql2");

let pool = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

const Commande = function(commande) {
    this.nom = commande.nom
    this.date_commande = commande.date_commande
    this.date_livraison = commande.date_livraison
    this.fournisseur = commande.fournisseur
    this.prix = commande.prix
}

Commande.getAll = result => {
    pool.query("SELECT * FROM commande", (err, res) => {
        if (err) throw err;
        result(null, res);
    });
};

module.exports = Commande;