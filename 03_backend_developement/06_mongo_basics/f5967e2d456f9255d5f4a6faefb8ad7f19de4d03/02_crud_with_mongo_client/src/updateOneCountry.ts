import * as mongo from "mongodb";
import { Country } from "./type";

export function updateOneCountry(db: mongo.Db): Promise<Country> {
  // code your function here
  return db
    .collection("worldAtlas")
    .updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })
    .then((r) => r.connection);
}
