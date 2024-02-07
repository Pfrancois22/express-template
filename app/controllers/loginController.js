// import User from "User"

import User from "../models/User.js";

const usersList = [];

const loginController = {

    showRegisterPage: (request, response) => {
        response.render('register');
    },

    prendEnMainLeFormulaire: (request, response) => {
        //je test si je récupére les infos
        // console.log(request.body);
        try {
            const newUser = new User(request.body);
            usersList.push(newUser);
            response.redirect('/login');
        } catch (error) {
            console.log(error);
            // oncréer un eboite response.locals res.locals.toto = error.message;
            // response.locals.toto = error.message;
            response.render('register', {toto: error.message})
        }

    }


}

export default loginController;

// une fois les infos récupérer il faut que je créer un user, et controler ce que l'on a besoin dedans

//autentification, on fait un autre formulaire
// on test si hash ok