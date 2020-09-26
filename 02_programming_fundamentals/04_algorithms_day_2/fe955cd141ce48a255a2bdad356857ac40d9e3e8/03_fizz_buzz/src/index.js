/* eslint-disable no-param-reassign */
function fizzBuzz(listOfNumberGivedWhenICalledTheFunction) {
  //0 je créer une fonction fizzbuzz qui prend en parametre la lise de nombre donné

  // Code the function here.

  //

  let newArrayModifiedTobeAFizzBuzzList = [];
  //1 je creer un array modfiable par la suite

  //3 Je code pour modifié la liste de base en fizz buzz liste

  //5 je n'oublie pas de stocker le retour de map dans mon nouve array avant tout !
  newArrayModifiedTobeAFizzBuzzList = listOfNumberGivedWhenICalledTheFunction.map(
    (valeurcourante) => {
      //4 Je lance un map sur la liste originelle qui va..
      if (valeurcourante % 15 === 0) {
        //10 remettre dans le bon ordre. 15, 5 et 3..
        //9 .. copier coller
        valeurcourante = "FizzBuzz"; //9 copier coller
        return valeurcourante; //9 copier coller
      } else if (valeurcourante % 5 === 0) {
        //9 .. copier coller
        valeurcourante = "Buzz"; //9 copier coller
        return valeurcourante; //9 copier coller
      } else if (valeurcourante % 3 === 0) {
        //6 .. Si la valeur courante est divisible par 3
        valeurcourante = "Fizz"; //8 Je remplace la valeur par Fizz
        return valeurcourante; //7 Je n'oublie pas de return (obligatoire)
      } else {
        //7 Sinon
        return valeurcourante; //7 Je n'oublie pas de return (obligatoire donc on le fait tout de suite)
      }
    }
  );

  return newArrayModifiedTobeAFizzBuzzList;
  //2 je renvois mon nouvel array modifié pour être une fizz buzz liste
}

const resultatDeMaFonction = fizzBuzz([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
]);
//0 j'appelle ma fonction avec une liste de nombres et stock le result dans une const

console.log(resultatDeMaFonction);
//0 j'affiche la liste modifié

// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz; // j'exporte la fonction pour que lest tests fonctionnent
