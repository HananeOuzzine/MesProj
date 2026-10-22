import Etudiant, { test } from "./classEtudiant.js";


console.log (`constante importé : test =${test} `);
let etud1 = new Etudiant("ALAMI" , 25 , 15);
console.log(etud1.sePresenter());
//
let isMembre = false;
let remise = isMembre == true ? 0.2: 0.1;
//
if (isMembre == true){
    remise = 0.5
} else{
    remise = 0.1
}
console.log("remise:",remise );
//
const personne ={
    nom:"nom",
    age:23,
    adress:{}
};
const lenom = personne.nom;
const {
    nom,
    age,
    adress:{ rue },
    adress:
}
