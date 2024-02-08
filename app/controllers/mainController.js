



// on créer un "objet" qui va contenir nos fonction de routage (ici la page d'accueil, pur les autres pages de base on peu les faire ici aussi sinon créer d'aures controlers)

const mainController = {

    // on créer notre premiére route, et on renvoi (response.render) la page demandé (ici la page d'accueil qui se trouve dans views)
    accueil: (request, response) => {
        response.render('accueil');
    },

}

// on exporte notre objet
export default mainController;