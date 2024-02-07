import express from 'express';
import mainController from './controllers/mainController.js';
import loginController from './controllers/loginController.js';

const router = express.Router();




// va sur home
router.get('/', mainController.accueil);







//j'envoi sur la page d'inscription
router.get('/register', loginController.showRegisterPage);
//une fois inscrit je récupére les infos du POST du formulaire et je fais : 
router.post('/register', loginController.prendEnMainLeFormulaire);




export default router;
