//--------------Heritage---------------

class Stagiaire extends Etudiant{
    constructor(nm, ag, p1, fil){
        super (nm , ag, p1);
        this.filiere = fil;
    }
    //redefinition de la methide sePresenter
    sePresenter(){
        return super.sePresenter() + "je suis un stagiaire";
    }
}