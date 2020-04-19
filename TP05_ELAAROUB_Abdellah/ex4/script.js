let nbr=Math.random()*100;
nbr=Math.floor(nbr);
console.log(nbr)
let valide=false;
var x=prompt("Donnez un nbr");
x=parseInt(x);
while(valide===false){
    if(x<nbr){
        alert("Ce nbr est plus petite :(");
        x=prompt("Donnez un nbr");
    }
    else if(x>nbr){
        alert("Ce nbr est plus grande :(");
        x=prompt("Donnez un nbr");
    }
    else{
        alert("Bravoo !!!");
        valide=true;
    }
}