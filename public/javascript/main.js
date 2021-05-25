'strict mode'

import { bol, poele, couteau, epicerie, maison, oignon, oeuf, fromage, epice } from "./classes.js";
import { personne } from "./object.js";

personne.seDeplacer(null ,maison);
personne.seDeplacer(maison, epicerie);
personne.prendre(epicerie.panier, personne.mainDroite, epicerie.ingredients)
console.log(personne.mainDroite);
personne.seDeplacer(epicerie, maison);
console.log(personne.lieu);
bol.mettre(personne.mainDroite.type[0].panContenu);
personne.seDeplacer(maison, epicerie, "remettre");
personne.seDeplacer(epicerie, maison);
personne.couper(bol.contenu, couteau)
bol.melange("omelette");

poele.cuir(bol.newMelange.contenu)


