import { Interface } from "readline";

function holidayLocationFinder(reader: Interface) {
  // Write your code here
  reader.question(
    `\n***Welcome to HOLIDAY LOCATION FINDER***\n\nThis program will help you find a location based on the continent you will input.\n\nHere is the list of continent to chose from:\n- Europe\n- North America\n- South America\n- Africa\n- Oceania\n\nPlease input your choice:\n> `,
    (continent) => {
      if (continent == "Europe") {
        console.log(
          `You chose ${continent}. I think you really should go spend some time in.`
        );
      }
      if (continent == "North America") {
        console.log(
          `You chose ${continent}. I think you really should go spend some time in.`
        );
      }
      if (continent == "South America") {
        console.log(
          `You chose ${continent}. I think you really should go spend some time in.`
        );
      }
      if (continent == "Asia") {
        console.log(
          `You chose ${continent}. I think you really should go spend some time in.`
        );
      }
      if (continent == "Africa") {
        console.log(
          `You chose ${continent}. I think you really should go spend some time in.`
        );
      }
      if (continent == "Oceania") {
        console.log(
          `You chose ${continent}. I think you really should go spend some time in.`
        );
      }
    }
  );
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
