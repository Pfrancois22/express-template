
// on importe les packages, dépendances et fichiers necessaires
import express from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js';

// on définie le fichier qui contient nos variables d'environnement et on exécute la fonction "config()" qui lui est lié
dotenv.config();

// on définit le port d'écoute
const port = process.env.PORT || 3000
//on créer une variable qui va contenir notre routeur
const app = express();

// on appelle notre générateur de template et on lui dit ou il faut qu'il aille cherché les vues
app.set('view engine', 'ejs');
app.set('views', './app/views');

// on lui dit de parser le retour d'information envoyé via "POST" pour que l'on pisse les lire (UTF8)
app.use(express.urlencoded({
    extended: true
}));

// on lui dit ou se trouve le répertoire qui va contenir tous ce qui est accessibles pour nos pages (CSS/JS (coté client)/img/etc.)
app.use(express.static('./public'));

//lancer les routes
app.use(router);






// on écoute le port
app.listen(port, () => {
    console.log(`ecoute sur http://localhost:${port}`);
})
