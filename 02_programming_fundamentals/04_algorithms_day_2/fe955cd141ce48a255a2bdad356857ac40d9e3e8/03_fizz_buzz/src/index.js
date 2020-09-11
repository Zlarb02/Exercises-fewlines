
function fizzBuzz(list) {
  // Code the function here.
  let yourBrandNewFizzBuzzList = [] ;
  
  function ifDivisible15(currentValue) {
    if (currentValue % 15 === 0){
      currentValue = "FizzBuzz"
    }
  }

  list.forEach(element => ifDivisible15(currentValue));
   
  return console.log(yourBrandNewFizzBuzzList) ;

}

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);


// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
