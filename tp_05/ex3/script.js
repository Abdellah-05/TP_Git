function somme(t){
    var s=0;
    console.log(t);
    for(e in t){
        s=s+t[e];
    }
    return s;
}
var t=new Array();
do{
    var v=prompt("Donnez un nombre  :)");
    v=parseInt(v);
    console.log(v);
    if(!(isNaN(v))) t.push(v);
}while(!(isNaN(v)))
somme(t);
let sum=somme(t);
console.log("la somme de tableau est ",sum);