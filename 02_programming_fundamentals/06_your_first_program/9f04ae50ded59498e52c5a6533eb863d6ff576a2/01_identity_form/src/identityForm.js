const identityForm = (reader) => {
  reader.question("What is your first name? ", (userfirstname) => {

    reader.question("What is your last name? ", (userlastname) => {

      reader.question("What is your age? ", (userage) => {
        console.log(`Your name is ${userfirstname} ${userlastname} and you are ${userage}.`);

        reader.close();
      });
    });
  });
  
};


// Leave line below for tests to work
module.exports = identityForm;