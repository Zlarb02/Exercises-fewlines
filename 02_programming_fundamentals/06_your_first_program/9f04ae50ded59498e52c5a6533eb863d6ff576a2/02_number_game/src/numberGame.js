function numberGame(reader, min = 1, max = 100) {
  const numberToFind = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);
  const randomNumber = numberToFind(min, max);

  console.log("What is THE number? (entre 1 et 100)");
  let i = 0;
  const getNumber = (text) => {
    reader.question(text, (usernumber) => {
      i++;
      const yourthebest = () => {
        console.log("I wait for this moment so long.. wait this is good ? you win in " + i + " try");
      };
      let switchFlag = "nimpsssss";
      if (isNaN(usernumber)) {
        console.log(`${usernumber} is not a number`);
        switchFlag = "NotANum";
      } else if (usernumber > max || usernumber < min) {
        switchFlag = "outOfBundaries";
      } else if (usernumber < randomNumber) {
        switchFlag = "trop ptit";
      } else if (usernumber > randomNumber) {
        switchFlag = "Trop Haut";
      } else if (usernumber == randomNumber) {
        yourthebest();
        reader.close();
        return;
      }

      switch (switchFlag) {
        case "trop ptit":
          getNumber("You are close... Trop ptit mon ptit gars. Try again : ");
          break;
        case "Trop Haut":
          getNumber("You are close... 2 I. Try again : ");
          break;
        case "outOfBundaries":
          getNumber("You are NOT close... NIMPS entre 0 et 100 you jerk. Try again : ");
          break;
        case "NotANum":
          getNumber("try again : ");
          break;
        default:
          return;
      }
    });
  };
  getNumber("Your answer : ");
}

/* const numberMister = Math.floor(Math.random() *max) +1;
  reader.question ("Enter Your Number : />", (number)=> {
    if (isNaN(number)) {
      console.log (`${number}, is not a Number!!`);
      numberGame(reader);
    }else if (number < 1; Number > 100) {
      console.log("The number is between 1 and 100");
      numberGame(reader);
    }elfe if (number < nulmberMister) {
      console.log("too low")
      numberGame(reader);
      else if (number > nulmberMister){
        console.log("Too high");
        numberGame(reader);
        {else{
          console.log("You won");
          reader.close();
    }
  });
}
*/

module.exports = numberGame;
