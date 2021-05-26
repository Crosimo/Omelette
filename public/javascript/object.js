let personne = {
    nom : "Esteban",
    lieu : [],
    argent: 15,
    mainDroite: {
        nom: "main droite",
        type: [],
    },
    mainGauche: {
        nom: "main droite",
        type: [],
    },
    seDeplacer(lieuDep, lieuArr, remettre) {
        if (lieuArr.nom === "epicerie") {
            console.log(`${personne.nom} est actuellement à l'${lieuArr.nom}`);   
        } else {
            console.log(`${personne.nom} est actuellement à la ${lieuArr.nom}`);  
        }
        this.lieu = lieuArr;
        if (lieuDep == null) {
            
        } else {
            lieuDep.personnes.splice(0, 1); 
        }
        
        lieuArr.personnes.push(personne);
        
        if (remettre == "remettre") {
            this.remettre(lieuArr);
            
        }
        // >>1. Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
        
    },
    remettre (epicerie){
        epicerie.panier.push(this.mainDroite.type[0])
        this.mainDroite.type.splice(0, 1);
        console.log(`Le ${epicerie.panier[0].nom} est de retour à ${epicerie.nom}`);

    },
    prendre(objet, main, ingredients) {
        
        if (main == this.mainDroite) {
            this.mainDroite.type.push(objet[0]);
            console.log(this.mainDroite.type);
            console.log(`${this.nom} a pris un ${this.mainDroite.type[0].nom}`)
        } else {
            this.mainGauche.type.push(objet[0]);
            console.log(this.mainGauche.type);
            console.log(`${this.nom} a pris un ${this.mainGauche.type[0].nom}`)
        }
        objet.splice(0, 1);

        for (let i = 0; i < ingredients.length; i++){
            this.mainDroite.type[0].panContenu.push(ingredients[i]);
            console.log(`${this.nom} a pris un(e) ${ingredients[i].nom}`);
            this.payerArticle(ingredients[i]);
        }
    },
    payerArticle(article) {
        if (this.argent > article.prix) {
            this.argent -= article.prix; 
        } else {
            console.log(`not enough ${this.argent} my dear sir`);
        }
        console.log(`${this.argent} euros restant`);
        
    },
    couper(ingredient, outil) {
        for (let i = 0; i < ingredient.length; i++){
            if (ingredient[i].etats == "entier") {
                outil.action(ingredient[i])
                console.log(ingredient[i].etats);
            } else {
                console.log(`Etat de ${ingredient[i].nom} n'est pas entier.`);
            }
        }
       
    },
}

export{personne}