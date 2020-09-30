import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return fetch("https://api.chucknorris.io/categories").then((response) => response.json());
}

function getChuckNorrisJoke(category: string): Promise<string> {
  // Your code goes here
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => {
      // console.log(response.json());

      return response.json();
    })
    .then((value) => value.value);
  // .then((parsedResponse) => {
  //   parsedResponse.body;
  // });
}

// Leave the line below for tests to work properly
export { getCategories, getChuckNorrisJoke };
