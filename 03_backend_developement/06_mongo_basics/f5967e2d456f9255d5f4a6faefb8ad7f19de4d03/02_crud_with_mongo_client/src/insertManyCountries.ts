import * as mongo from "mongodb";
import { Country } from "./type";

export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertMany([
      {
        name: "a",
        continent: "a",
        capital: "a",
      },
      {
        name: "b",
        continent: "b",
        capital: "b",
      },
      {
        name: "c",
        continent: "c",
        capital: "c",
      },
    ])
    .then((r) => r.ops);
}
