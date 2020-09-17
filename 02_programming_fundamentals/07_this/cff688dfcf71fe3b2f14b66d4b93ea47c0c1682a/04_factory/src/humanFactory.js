const humanFactory = (objethumanidentityaveckeysandvaluecorespondante) => {
  if (objethumanidentityaveckeysandvaluecorespondante == { genre: "female" }) {
    let human = objethumanidentityaveckeysandvaluecorespondante;
    human.firstName = "Jane";
    human.lastName = "Doe";
    human.genre = "female";
    human.job = "unemployed";
  }
  function fullname(human) {
    console.log(`${human.firstname} ${human.lastname}`);
  }
  function introduction(human) {
    console.log("Hello! My name is " + `${human.firstname} ${human.lastname}` + ".");
    return this;
  }
};

const createHumans = (arrayHuman) => {
  let numberofhuman = 0;
  const human1 = {
    ...arrayHuman[numberofhuman],
  };
  numberofhuman++;
  const human2 = {
    ...arrayHuman[numberofhuman],
  };
  const humans = [human1, human2];
  return humans;
};

module.exports = {
  humanFactory,
  createHumans,
};
