function range(startArrayInteger, endArrayInteger) {
   
  let startIterrated = startArrayInteger;
  let finalArray = [];
  
  if (startIterrated < endArrayInteger ) {
    while (startIterrated <= endArrayInteger){
      finalArray.push(startIterrated) ;
      startIterrated = startIterrated + 1 ;
    }
  } 
  else {
    while (startIterrated >= endArrayInteger){
      finalArray.push(startIterrated) ;
      startIterrated = startIterrated - 1 ;
    }
  } 
  return finalArray ;
}
range(1,5) ;
// Do not remove last lines, it is for tests
module.exports = range;
