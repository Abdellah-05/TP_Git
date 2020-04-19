var tab = [4, 1, -5];
function adddition(x){
    return x+2;
}
function soustraction(x){
    if(x >= 0){
        return x-2;
    }else{
        alert("!! Nombre négatif !!");
    }
}
function affiche(){
    alert(adddition(tab[0]));
    alert(adddition(tab[2]));
    alert(soustraction(tab[0]));
    alert(soustraction(tab[2]));
}
affiche()