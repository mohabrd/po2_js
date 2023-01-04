//EXO1

// let François = {
//     panier : ["huile","tomate","pain"],
//     Derober(aliment1, aliment2) {
//         François.panier.push(aliment1, aliment2);
//       }
// }

// console.log(François.panier);



// let Sergio = {
//     panier : ["beurre","orange","tartine"],
    
// }

// console.log(Sergio.panier);


// François.Derober(Sergio.panier[0], Sergio.panier[1]);

// console.log(François.panier);


//pas réussi autrement
// Sergio.panier.splice(0, 2);
// console.log(Sergio.panier);



//EXO2

let vieille_dame = {
    âge : 79,
    nom : {prenom : "Jacqueline", nonDeFamille : "Dupont"},
    moral : 'mal',
    objet : 'canne',
    Parler() {
        if (this.moral == 'mal') {
            this.moral = alert(`VOUS me dérangez, frappe avec ${this.objet}`)
        }
        else if (this.moral == 'bien') {
        this.moral = alert(`BONJOUR ${vieil_homme.nom}`)
        }
    }
};


let vieil_homme = {
    nom : "Franklin",
    Adoucir() {
        vieille_dame.moral = 'bien'
        
    }
    
};

vieille_dame.Parler();
// console.log(vieille_dame.Parler());
vieil_homme.Adoucir();
// Lconsole.log(vieille_dame.Parler());
vieille_dame.Parler();
