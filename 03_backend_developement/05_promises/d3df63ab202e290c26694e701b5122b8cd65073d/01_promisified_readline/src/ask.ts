import { rl } from "./reader";

function ask(question: string, reader = rl): any {
  // Your code goes here

  return new Promise((resolve, reject) => {
    reader.question(`${question}`, (input) => {
      if (input !== "") {
        resolve(input);
      } else if (input === "") {
        reject(ask("error"));
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
