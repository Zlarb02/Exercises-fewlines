import * as request from "request";

function getCategories(): void {
  // code the function here
  request(
    "https://api.chucknorris.io/jokes/categories",
    (error, reponse, result) => {
      if (error) {
        console.error(error);
      } else {
        const result2 = JSON.parse(result);
        console.log(result2);
      }
    }
  );
}

// leave line below for tests to work properly
export { getCategories };
