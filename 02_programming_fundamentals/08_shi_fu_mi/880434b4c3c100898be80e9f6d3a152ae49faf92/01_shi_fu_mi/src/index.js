/* eslint-disable quotes */
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateIAChoice = (min, max) => Math.round(Math.random() * (max - min) + min);
const choiceOfIA = generateIAChoice(1, 3);

const moves = {
  rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],

  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],

  scissors: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};

const reverseLine = (line) => {
  const changedLine = line
    .split("")
    .map((char) => {
      if (char == ")") {
        return "(";
      } else if (char == "(") {
        return ")";
      }
      return char;
    })
    .join("");

  return changedLine.split("").reverse().join("");
};

const clear = () => console.log("\x1B[2J\x1B[0f");
clear();

console.log("Welcome to ShiFuMi");
let numberofmanche = 0;

const nouvellemanche = () => {
  numberofmanche++;

  clear();

  if (numberofmanche == 1) {
    console.log("Welcome to ShiFuMi\n(Human VS IA version)\nGood luck !");
  } else {
    console.log(`This is your "manche" n°${numberofmanche} `);
  }

  Object.keys(moves).forEach((movename, index) => {
    console.log(`${index + 1} - ${movename}`);
  });

  const pleasechooseamove = () => {
    reader.question("Please choose a move\n> ", (playermove) => {
      // Handle the move
      if (playermove == 1 || playermove == 2 || playermove == 3) {
        const displayPlayerMove = (playermove) => {
          const indexPlayer = parseInt(playermove - 1);
          const movePlayer = Object.keys(moves)[indexPlayer];
          const playerSymbol = moves[movePlayer];
          console.log(playerSymbol.join("\n"));
        };
        displayPlayerMove(playermove);
      } else {
        pleasechooseamove();
      }
      const displayIAMove = (IAchoice) => {
        const indexIA = parseInt(IAchoice - 1);
        const moveIA = Object.keys(moves)[indexIA];
        const symbolOfIA = moves[moveIA].map(reverseLine);
        console.log("This is the move of your opponent :\n" + symbolOfIA.join("\n"));
      };

      displayIAMove(choiceOfIA);
      let whichWin = "null";

      if (
        (playermove == 1 && choiceOfIA == 1) ||
        (playermove == 2 && choiceOfIA == 2) ||
        (playermove == 3 && choiceOfIA == 3)
      ) {
        whichWin = "Egalite";
      } else if ((playermove == 1 && choiceOfIA == 3) || (playermove == 3 && choiceOfIA == 1)) {
        whichWin = "Rock win";
        console.log("Le rock l'emporte sur la cisaille.");
      } else if ((playermove == 1 && choiceOfIA == 2) || (playermove == 2 && choiceOfIA == 1)) {
        whichWin = "Paper win";
        console.log("The paper beats the rock !");
      } else if ((playermove == 2 && choiceOfIA == 3) || (playermove == 3 && choiceOfIA == 2)) {
        whichWin = "Cissors win";
        console.log("Cissors cuts paper..");
      } else {
        console.log(`Je suis une IA triste et seule. :( 
     (:     héhé console.log("Tu sais je ne suis qu'un simple programme de feneant... Please try again") clindeuil ;) `);
      }

      switch (whichWin) {
        case "Paper win":
          if (playermove == 2) {
            console.log("You win !");
          } else {
            console.log("IA win !");
          }
          break;
        case "Rock win":
          if (playermove == 1) {
            console.log("You win !");
          } else {
            console.log("IA win !");
          }
          break;
        case "Cissors win":
          if (playermove == 3) {
            console.log("You win !");
          } else {
            console.log("IA win !");
          }
          break;
        case "Egalite":
          console.log("Pas de gagnant, egalité.");
          break;
        default:
          if (playermove == 1) {
            console.log("You win !");
          } else {
            console.log("IA win !");
          }
          break;
      }
      const askifwanaplay = () => {
        reader.question("Wanna play again (Y/n)\n> ", (yesno) => {
          if (yesno.toLowerCase() == "y" || yesno.toLowerCase() == "yes" || yesno == "") {
            nouvellemanche();
          } else if (yesno.toLowerCase() == "n" || yesno.toLowerCase() == "no" || yesno.toLowerCase() == "non") {
            reader.close();
          } else {
            askifwanaplay();
          }
        });
      };
      askifwanaplay();
    });
  };
  pleasechooseamove();
};
nouvellemanche();
