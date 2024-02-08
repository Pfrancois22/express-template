// on importe les packages, dépendances et fichiers necessaires
import express from 'express';
import mainController from './controllers/mainController.js';

// on créer une variable qui va contenir notre router via "express.router()"
const router = express.Router();

// on lance un middleware qui va allez sur la page d'acceuil (ici pas d'autre page, donc pas d'autre traitement pour choisir une page)
router.get('/', mainController.accueil);

// j'exporte mon router
export default router;
