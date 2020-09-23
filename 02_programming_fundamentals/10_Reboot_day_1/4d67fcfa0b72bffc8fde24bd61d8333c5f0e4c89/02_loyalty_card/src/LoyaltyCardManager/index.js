import * as display from "../LoyaltyCardManager/display.js";
import * as customer from "../LoyaltyCardManager/customer.js";

let R;
const ask = (q, c) => R.question(`${q}\n> `, c);

const getCustomerInfo = () => {
  R.question("first name", (firstName) => {
    R.question("last name", (lastName) => {
      customer.createCustomer({
        firstName,
        lastName,
        /**
         * COMPLETE HERE
         */
      });
      loyaltyCardManager(R);
    });
  });
};

export default function loyaltyCardManager(reader) {
  R = reader;
  console.log("Welcome to loyaltyCardManager!");
  display.displayMenu(["add a customer", "Access customer data"]);
  ask("Choose an action", (action) => {
    switch (action) {
      case "1":
        display.displayNewCustomerMenu(["first name", "last name", "email", "birth date", "city", "country"]);
        //loyaltyCardManager(R);
        break;
      case "2":
        console.log("customer information");
        //loyaltyCardManager(R);
        break;
      default:
        console.log("Unknown command");
        loyaltyCardManager(R);
    }
  });
}
