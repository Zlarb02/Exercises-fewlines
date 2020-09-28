// Use this file to test your `OrangeTree` class.
import { OrangeTree } from "./OrangeTree";

const logSeparator = "\n=============================================\n";

const youngOrangeTree = new OrangeTree(0);

while (youngOrangeTree.alive) {
  console.log(logSeparator);

  youngOrangeTree.ageOneYear();
  console.log(
    `The tree is ${youngOrangeTree.age} year${
      youngOrangeTree.age > 1 ? "s" : ""
    } old and ${youngOrangeTree.height}m high.`
  );

  console.log(
    `It has grow ${youngOrangeTree.oranges.length} orange${
      youngOrangeTree.oranges.length > 1 ? "s" : ""
    }: ${youngOrangeTree.oranges.join("")}`
  );

  const isTreeAlive = youngOrangeTree.alive
    ? "The tree is still alive."
    : "The tree lived a peaceful life. RIP.";

  console.log(isTreeAlive);
}

console.log(logSeparator);

const matureOrangeTree = new OrangeTree(30);
matureOrangeTree.ageOneYear();
matureOrangeTree.pickAnOrange();
