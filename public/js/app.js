//EXO1

let François = {
    panier : ["huile","tomate","pain"],
    Derober(aliment1, aliment2) {
        François.panier.push(aliment1, aliment2);
      }
}

console.log(François.panier);




let Sergio = {
    panier : ["beurre","orange","tartine"],
    
}

console.log(Sergio.panier);


François.Derober(Sergio.panier[0], Sergio.panier[1]);

console.log(François.panier);


//pas réussi autrement
Sergio.panier.splice(0, 2);
console.log(Sergio.panier);
