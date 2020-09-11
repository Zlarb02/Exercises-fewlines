function range(startArrayInteger, endArrayInteger) {
   
  let finalArray = [startArrayInteger,];
 
  if (startArrayInteger < endArrayInteger ) {
    while (startArrayInteger < endArrayInteger){
    // eslint-disable-next-line no-param-reassign
      startArrayInteger = startArrayInteger + 1 ;
      finalArray.push(startArrayInteger) ;
    }
    return finalArray  ;
  } 
  else {
    while (startArrayInteger > endArrayInteger){
    // eslint-disable-next-line no-param-reassign
      startArrayInteger = startArrayInteger - 1 ;
      finalArray.push(startArrayInteger) ;
    }
    return finalArray  ;
  } 
}

range(1,5) ;
// Do not remove last lines, it is for tests
module.exports = range;
