
class Ingredients  {
    constructor(nom, etats, prix){
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;
    }
}

let oignon = new Ingredients("oignon", "entier", 1);
let oeuf = new Ingredients("oeuf", "coquille", 0.75);
let epice = new Ingredients("epice", "moulu", 0.5);
let fromage = new Ingredients("fromage", "entier", 1.25);

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}
class Epicerie extends Lieu{
    constructor(nom, personnes) {
        super(nom, personnes);
        let panier1 = {
            nom: "panier",
            panType: "Grand panier noir",
            panContenu: [],
        };
        // for (let i = 0; i < 8; i++){
        //     let panier[i] ={
        //     panType: "type de panier",
        //     panContenu: [],
        // };
        // }
        let panier2 = {
            nom: "panier",
            panType: "Petit panier",
            panContenu: [],
        };
        this.panier = [panier1, panier2];
       
        this.ingredients = [oignon, oeuf, epice, fromage];

    }
}



let epicerie = new Epicerie("epicerie", [null])
let maison = new Lieu("maison", [null]);



class Outils{
    constructor(nom) {
        this.nom = nom;
    }
}
class Couteau extends Outils{
    constructor(nom) {
        super(nom);
        this.action= function(ingredient){
            ingredient.etats = "coupé";
        }
    }
}
let couteau = new Couteau("couteau")



class Poele extends Outils{
    constructor(nom) {
        super(nom);
        this.contenu = [];
        this.cuir = function (content) {
            this.vider(content);
            
            // let binder = this.contenu[0].etats.bind(poele);
            window.setTimeout(() => {
                this.contenu[0].etats = "cuite";
            console.log(`L'${this.contenu[0].nom} est ${this.contenu[0].etats}`)}, 4000);
            
        }
        this.vider = (content) => {
            
            this.contenu.push(bol.newMelange);

            
            content.splice(0);
        },
            this.resultat = () => {
           let binder= this.bind(poele);
           return binder.contenu[0].etats = "cuit"
        }
        

    }
}


let poele = new Poele("poele");
class Bol extends Outils{
    constructor(nom) {
        super(nom);
        this.contenu = [];
        this.melange = function (nomMelange) {
           
             this.newMelange = {
                nom: nomMelange,
                etats: "pas cuit",
                contenu : this.contenu
            }
            delete this.contenu;
            console.log(`le ${this.nom} contient un début d'${this.newMelange.nom} ${this.newMelange.etats}`);
        }
        this.mettre = function (ingredients) {
            let i = 0;
            for (i in ingredients) {
                this.contenu.push(ingredients[i]);
                if (ingredients[i].nom.charAt(0) == 'e' || ingredients[i].nom.charAt(0) == 'o') {
                    console.log(`L'${ingredients[i].nom} est mis dans ${this.nom}`);  
                } else {
                    console.log(`Le ${ingredients[i].nom} est mis dans ${this.nom}`);
                }
                // ingredients.splice(ingredients.indexOf(this.contenu[i]), 1)
                console.log(ingredients[i]);
                
            }
            ingredients.splice(0);
        }
        

    }
}
let bol = new Bol("bol");

export {bol, poele, couteau, epicerie, maison, oignon, oeuf, fromage, epice}