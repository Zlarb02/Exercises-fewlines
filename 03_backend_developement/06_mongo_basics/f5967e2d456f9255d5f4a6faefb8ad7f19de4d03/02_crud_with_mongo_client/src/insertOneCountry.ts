import * as mongo from "mongodb";
import { parse } from "path";
import { Country } from "./type";

export function insertOneCountry(db: mongo.Db): Promise<Country> {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertOne({
      name: "coucou",
      continent: "peuimporte",
    })
    .then((r) => r.ops[0]);
}
