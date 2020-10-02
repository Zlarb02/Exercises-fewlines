import * as mongo from "mongodb";
import { Country } from "./type";

export function findManyCountries(db: mongo.Db): Promise<Country[]> {
  // code your function here
  return db.collection("worldAtlas").find({ continent: "Europe" }).toArray();
}
