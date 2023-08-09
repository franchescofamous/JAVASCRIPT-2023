//let nom; // declaration de variable
//nom = "Valentin"; // affectation de variable
//camelCase
//let nomEtudiant = "Reddington";

/* const nombreDevie = 100;
console.log(nom, nomEtudiant, nombreDevie);

console.log(5); */

//let age = prompt("quelle est votre age?");

//console.log(age);
/* 
let nomEwe = prompt("Quelle est votre nom ewe");
let prenom = prompt("Quelle est votre prenom");

console.log("bienvenue " + prenom); */

// Conditions
let age = 17;
if (age <= 17) {
  console.log("c'est une mineur");
} else {
  console.log("tu peux aller");
}

let nom = "joel";
let prenom = "joel";

if (nom == prenom) {
  console.log("c'est bizare");
} else {
  console.log("ca va");
}

//let number = Number(prompt("Veuiller choisir un nombre"));

/* console.log(number + 1);
console.log(typeof number); */

/* if (number > 0) {
  console.log("positif");
} else if (number == 0) {
  console.log("nul");
} else {
  console.log("negatif");
}
 */

/* let sexe = prompt("Qelle est votre sexe, f pour feminin, m pour masculin");
let fesse = prompt(" est ce que tu as fesse ? o pour oui et n pour non");

if (sexe == "f" && fesse == "o") {
  console.log("Ton avenir est coller derriere toi");
} else {
  console.log("Travaille dur, toi tu dois manger a la sueur de ton front");
}

if (sexe == "m" || fesse == "n") {
  console.log("je t'ai dit de te concentrer sur le travail");
} */

/* let lundi = "kodjo";
let mardi = "ablam";
let mercredi = "kokou";
let jeudi = "yao";
let vendredi = "koffi";
let samedi = "komi";
let dimanche = "kossi";

switch (lundi) {
  case "kodjo":
    console.log("vous etes né un lundi");
    break;
  case "ablam":
    console.log("Vous etes ne un mardi");
    break;
  case "kokou":
    console.log("Vous etes ne un mercredi");
    break;
  case "yao":
    console.log("Vous etes ne un jeudi");
    break;
  case "koffi":
    console.log("Vous etes ne un vendredi");
    break;
  case "komi":
    console.log("Vous etes ne un samedi");
    break;
  case "kossi":
    console.log("Vous etes ne un dimanche");
    break;

  default:
    console.log("Votre nom doit etre erroné");
    break;
}
 */

//boucle while & for

/* let specialite = prompt("qu'elle spécialité faite vous ?");
while (specialite != "IT") {
  console.log("tu n'as pas ta place ici");
  specialite = prompt("qu'elle spécialité faite vous ?");
} */
/* let nbr = 1;
while (nbr < 6) {
  console.log("inferieur");
  nbr++;
} */

/* let heure = Number(prompt("Saisissez l'heure"));
let minute = Number(prompt("Saisissez la minute"));
let seconde = Number(prompt("Saisissez la seconde"));

if (seconde > 0 && seconde < 59) {
  seconde = seconde + 1;
  console.log(`${seconde}`);
} else if (seconde == 59) {
  if (minute > 0 && minute < 59) {
    minute = minute + 1;
    seconde = seconde = 0;
    console.log(`${minute} : ${seconde}`);
  }
}
 */

let number = Number(prompt("elle table voulez vous ?"));

for (let i = 0; i < 13; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
  //console.log(number + "*" + i + "=" + number * i);
}
