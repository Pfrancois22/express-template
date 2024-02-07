import express from 'express';
import * as dotenv from 'dotenv';
import session from 'express-session';
import router from './app/router.js';

dotenv.config();

const port = process.env.PORT || 3000
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

// je dis pour lire ce que je récupére via POST
app.use(express.urlencoded({
    extended: true
}));


app.use(express.static('./public'));

//lancer les routes
app.use(router);






// j'écoute le port
app.listen(port, () => {
    console.log(`ecoute sur http://localhost:${port}`);
})


//controller contient des fonctions appellé par les routes