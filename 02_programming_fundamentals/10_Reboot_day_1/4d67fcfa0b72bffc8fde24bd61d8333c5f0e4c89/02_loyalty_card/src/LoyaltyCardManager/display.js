export const displayMenu = (list) => {
  list.forEach((menuOption, index) => {
    console.log(`${index + 1} - ${menuOption}`);
  });
};

export const displayNewCustomerMenu = (list) => {
  list.forEach((menuOption) => {
    console.log(`🤖 - ${menuOption}:>\n>`);
  });
};
