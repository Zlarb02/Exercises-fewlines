const calculator = (reader) => {
  reader.question("Enter the first number\n> ", (firstNumber) => {
    console.log(firstNumber);
    reader.question("Choose an operation: [ + - * / ]\n> ", (operation) => {
      console.log(operation);
      reader.question("Enter the second number\n> ", (secondNumber) => {
        console.log(secondNumber);
        if (operation == "+") {
          const result = parseInt(firstNumber) + parseInt(secondNumber);
          console.log(firstNumber + " " + operation + " " + secondNumber + " = " + result);
        } else if (operation == "-") {
          const result = parseInt(firstNumber) - parseInt(secondNumber);
          console.log(firstNumber + " " + operation + " " + secondNumber + " = " + result);
        } else if (operation == "*") {
          const result = parseInt(firstNumber) * parseInt(secondNumber);
          console.log(firstNumber + " " + operation + " " + secondNumber + " = " + result);
        } else if (operation == "/") {
          const result = parseInt(firstNumber) / parseInt(secondNumber);
          console.log(firstNumber + " " + operation + " " + secondNumber + " = " + result);
        } else {
          console.log("Wrong input(s)");
          calculator(reader);
        }
        reader.question("Calcul again ? Y/n\n> ", (Yn) => {
          if (Yn == "Y" || Yn == "y") {
            reader.question("Keep result as first number ?\n> ", (Yn) => {
              if (Yn == "Y" || Yn == "y") {
                console.log();
              } else {
                calculator(reader);
              }
            });
          } else {
            reader.close();
          }
        });
      });
    });
  });
};

export { calculator };
