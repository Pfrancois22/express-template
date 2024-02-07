
// // // un objet user
// // const newUser = new User({email: "toto@gmail.com", password: "1234"});
// // // pour le voir (email est la propriété privé renvoyé par le "get email()")
// // console.log(newUser.email);

import validator from "validator";
import bcrypt from "bcrypt";

class User {

    #email;
    #password;

    constructor(object){
        this.email = object.email;
        this.password = object.password;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }

    set email(value) {
        if(!validator.isEmail(value)) {
            throw new Error("L'email n'est pas valide");
        }
        this.#email = value;
    }

    set password(value) {
        const options =  { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }
        if(!validator.isStrongPassword(value, options)){
            throw new Error("Le password doit comporter au moins 12 caractères avec 4 types de caractères différents")
        }
        //hashSync n'est pas synchrone pour eviter le await (synchro ou assynchrone)
        const hash = bcrypt.hashSync(value, 10);
        this.#password = hash;
    }

}

export default User;