import * as request from "request";

function getChuckNorrisJoke(category: any): void {
  // code the function here

  request(
    `https://api.chucknorris.io/jokes/random?category=${category}`,
    (error, reponse, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log(result);
      }
    }
  );
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
