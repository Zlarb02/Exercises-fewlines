function handleTuple(myTuple: [string, number]): void {
  // Code the function here.
  if (typeof myTuple[0] === "string") {
    console.log(`${myTuple[0]} is a ${typeof myTuple[0]}`);
  }
  if (typeof myTuple[1] === "number") {
    console.log(`${myTuple[1]} is a ${typeof myTuple[1]}`);
  }
}
const myTuple: [string, number] = ["Bonjour", 1];
handleTuple(myTuple);
// Leave the line below for tests to work properly.
export { handleTuple };
