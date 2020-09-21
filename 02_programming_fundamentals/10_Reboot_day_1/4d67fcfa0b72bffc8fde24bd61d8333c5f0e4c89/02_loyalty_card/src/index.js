import readline from "readline";
import addCustomer from "../addCustomer";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

addCustomer(reader);
