/* global db */

// write your MongoDB shell command here
db.worldAtlas.insertMany([
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
  {
    name: "Iceland",
    capital: "Icecity",
    continent: "Icecontinent",
  },
  {
    name: "Salamalec",
    capital: "Bonjour",
    continent: "Politesse",
  },
]);
