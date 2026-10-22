let div1 = document.getElementById("dv1");
function afficherTab(t = []){
//div1.innerHTML = t.toString();
div1.innerHTML += JSON.stringify(t) + "<hr>";
//for (let i=0 ;i<t.length;i++){
  //  div1.innerHTML +=t[i].toString()+ "<br>";
//}else{
  //  div1.innerHTML += t[i].toString + ",";
//}
//}
}
//creation de tableaux 
//tableau vide 
const tab1 = [];
const tab2 = new Array();
//creation et initialisation d'un tableau 
const tab3 = ["elm1 ", "elm2", "elm3", "elm4"];
const tab4 = new Array("elm1", "elm2", "elm3", "elm4", {nom:"nom1"});
//creer un tableau en indiquant sa taille 
const tab5 = new Array(6)
afficherTab(tab3);
afficherTab(tab4);
//taille du tableau
const taille = tab3.length;
div1.innerHTML +="taille de tab3 :" + taille;
//acces aux element
tab3[0]= "element0"; //acces en ecriture ;
div1.innerHTML +="<hr>";
afficherTab(tab3) 
//acces en lecture 
const premierElmt = tab3[0];
const dernierElmt = tab3[taille - 1];
div1.innerHTML +="<hr> premier element de tab3 :" +premierElmt;
div1.innerHTML +="<br> dernier element de tab3 :" +dernierElmt;
//ajouter un element à la fin 
tab3.push("element5");
div1.innerHTML +="<br> apres ajout , tab3 devient : <br>";
afficherTab(tab3) ;
tab3[tab3.length]="element6";
div1.innerHTML +="apres ajout, tab3 devient:<br>";
afficherTab(tab3);
//parcourir un tableau
div1.innerHTML +="<hr>contenu de tab3 avec une boucle for ; <br>";
for(let i=0; i<tab3.length; i++){
    div1.innerHTML +="tab3[" + i + "]= "+ tab3[i] + "<br>";
}
//parcourir un tableau par une boucle forEach
div1.innerHTML +="<hr> contenu de tab3 avec une boucle forEach:<br>";
tab3