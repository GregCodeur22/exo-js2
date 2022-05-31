// intervertire deux mots
let prenom = "greg";
let nom = "rsd";

// console.log(prenom, nom);

let convertion = nom;
nom = prenom;
prenom = convertion;

// console.log(prenom, nom);

// intervertire deux nombres
let nbr1 = 1;
let nbr2 = 2;
// console.log(nbr1, nbr2);

nbr1 = nbr1 + nbr2;
nbr2 = nbr1 - nbr2;
nbr1 = nbr1 - nbr2;
// console.log(nbr1, nbr2);

// compter le nbrs de lettres d'un mots
// while (word[i]) {
//   i++;
// }
// console.log(i);

let word = "Bonjour";
i = 0;
for (let n of word) {
  if (n == "o") {
    i++;
  }
}
// console.log(i);

//le tri a bulle

let numbers = [23, 43, 78, 98, 1, 4, 50];
let numbersLength = numbers.length;
for (let main = 0; main < numbersLength - 1; main++) {
  for (let cell = 0; cell < numbersLength - main - 1; cell++) {
    if (numbers[cell] > numbers[cell + 1]) {
      // Si la valeur de la case actuelle est supérieure à la valeur de la case d'après, on permute les valeurs (en utilisant l'échange de variables précédement vu)
      numbers[cell] = numbers[cell] + numbers[cell + 1];
      numbers[cell + 1] = numbers[cell] - numbers[cell + 1];
      numbers[cell] = numbers[cell] - numbers[cell + 1];
    }
  }
}
console.log(numbers);

let mot = "Salut";
let i = 0;
for (let m of mot) {
  i = i + 1;
}
