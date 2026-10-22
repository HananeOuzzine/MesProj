export const test = 20 


export default class Etudiant {
    //constructeur
    constructor(nm,ag, p1){
        this.nom = nm;
        this.age = ag;
        this._champPrivate  = p1;
       
    }
    //getter et setters
    get getNom(){
        return this.nom;
    }
     
    set setAge(a){
        this.age = a;
    }


    //metodes privées
    _MethodePrivivée(){
          console.log("je sius une methode privée1")
    }



   //methodes 
   sePresenter (){
    return this.nom + "j'ai " + this.age + " ans.";
   }
}



