//function

/* function direBonjour() {
  console.log("Bonjour!!!!");
}

direBonjour();

function direBonjourAmi(nomAmi) {
  //console.log("Bonjour " + nomAmi)
  console.log(`Bonjour ${nomAmi}`);
}

direBonjourAmi("Famous");

function chiffreSacre(nombre) {
  console.log(`Mon chiffre sacré est ${nombre}`);
}

chiffreSacre("abalo"); */

/* function Presentation() {
  let nom = prompt("Saisissez votre nom");
  let prenom = prompt("Saisissez votre prenom");
  let age = prompt("Saisissez votre age");
  console.log(`${nom} ${prenom} ${age}`);
}

Presentation(); */

/* function Presentation(nom, prenom, age) {
  console.log(`${nom} ${prenom} ${age}`);
}
let n = prompt("Saisissez votre nom");
let p = prompt("Saisissez votre prenom");
let a = prompt("Saisissez votre age");

Presentation(n, p, a); */

/* function direBonjour() {
  console.log("Bonjour!!!!");
}

//direBonjour();

function bonjour() {
  return "Bonjour!!!!";
}

let salutation = bonjour();
console.log(salutation); */

/* function addition(nbre1, nbre2) {
  console.log(nbre1 + nbre2);
  return nbre1 + nbre2;
}

let nombre = addition(2, 2);

for (let i = 0; i < 13; i++) {
  console.log(nombre * i);
}
 */

/* function direBonjour() {
  console.log("Bonjour!!!!");
} */

/* let direBonjour = () => {
  console.log("Bonjour!!!!");
};
let boujourAmi = (nomAmi) => console.log("Bonjour!!!!" + nomAmi);
direBonjour(); */

/* function Presentation() {}

let Presentation = () => {};
 */

// tableau

let mesFilms = ["Mavrick", "Wakanda", "Avatar"];
/* mesFilms[0]; //premier element "Mavrick"
mesFilms.length; // la taille du tableau
mesFilms.push("oooo"); // pour enregistrer dans le tableau ** a la suite
console.log(mesFilms);
mesFilms.pop(); //supprimer le dernier element
console.log(mesFilms);
mesFilms.splice(1, 1); // supprimer un element a partir de l'indice 1
console.log(mesFilms); */

/* let randomTab = [15, true, ["edwige", "Rose"], { nom: "Linda" }, () => {}];

console.log(randomTab);
console.log(randomTab[1]);
console.log(randomTab[2][0]);
console.log("taille du tableau: " + randomTab.length); */

/* for (let i = 0; i < mesFilms.length; i++) {
  console.log(mesFilms[i]);
}

for (let film of mesFilms) {
  
  console.log(`J'ai regardé le film ${film}`);
}
 */

//objet

/* let etudiant = {
  nom: "yann",
  age: 55,
  statutMatrimonial: "CELIBATAIRE",
  mesFilmes: [{ nomFilm: "mavrick" }, { nomFilm: "wakanda
  " }],
  /*  Presentation(){

  } */

/*  presentation() {
    console.log(
      `je m'appelle ${this.nom} 
       j'ai ${this.age} ans et je suis ${this.statutMatrimonial}`
    );
  },
};

etudiant.presentation();
etudiant.filiere = "sil";
console.log(etudiant.filiere);  */
/* console.log(
  `je m'appelle ${etudiant.nom}, 
  je suis un etudiant agé de ${etudiant.age} ans et je suis 
  ${etudiant.statutMatrimonial}`
); */

//etudiant.nom;
/* console.log(etudiant.nom);

etudiant.nom = "Satoru";
console.log(etudiant.nom); */

/* let parite = (nombre) => {
  if (nombre % 2 == 0) {
    console.log(`${nombre} est paire`);
  } else {
    console.log(`${nombre} est impaire`);
  }
};

let addition = (nbre1, nbre2) => {
  console.log(nbre1 + nbre2);
  parite(nbre1 + nbre2);
};

addition(2, 3); */
/* let parite = (nombre) => {
  if (nombre % 2 == 0) {
    console.log(`${nombre} est paire`);
  } else {
    console.log(`${nombre} est impaire`);
  }
};
let mesNombres = [1, 2, 3, 4, 5, 6, 7];
console.log(mesNombres);
function parcourir() {
  for (let nombre of mesNombres) {
    console.log(`J'ai appelé le nombre${nombre}`);
  }
  console.log()
}
parcourir();
 */
/*  function addition(nbre1, nbre2) {
  console.log(nbre1 + nbre2);
  return nbre1 + nbre2;
}
let nombre = addition(4, 3);
let a = true;
let b = false;
function parité(nombre) {
  if (nombre%=0) {
    console.log(`le nombre entré est ${a}`);
  } else {
    console.log(`le nombre entré est ${b}`);
  }
}
function addition();
function parité();
 */

/* let tableauNotes = [2, 53, 57, 98, 15, 17, 3];

function verif(parametre) { */
/*  for (let i = 0; i < parametre.length; i++) {
    if (parametre[i] % 2 != 0) {
      console.log(parametre[i]);
    }
  } */
/* for (let note of parametre) {
    if (note % 2 != 0) {
      console.log(note);
    }
  }
}
 */
/* verif(tableauNotes); */
/* let films = [
  { nomFilm: "mavrik", anneeFilm: 1970 },
  { nomFilm: "avengers", anneeFilm: 1980 },
  { nomFilm: "blacklist", anneeFilm: 2000 },
  { nomFilm: "return2", anneeFilm: 2010 },
];
function parcourir(parametr) {
  for (let filme of parametr) {
    console.log(filme.nomFilm);
  }
}
parcourir(films);
function vielleAnnee(para) {
    for (let i = 0; i < films.length; i++)
    if (  ) {
      
    } 
  
  
} */

/* class Personne {
  constructor(nom, prenom, role) {
    this.nom = nom;
    this.prenom = prenom;
    this.role = role;
  }
}

class Etudiant extends Personne {
  //super()
  constructor(nom, prenom, role, age) {
    super(nom, prenom, role);
    this.age = age;
  }
  

  show(){
    console.log()
  }
} */

const yann = new Etudiant("Hometowou", "Eric", "eleve", 25);

console.log(yann);
