import { greet } from "./index";
test("There is a function greet...", (done) => {
  expect.assertions(1);
  expect(greet).toBeDefined();
  done();
});
test("...it should be able to say 'Hello  !' when called like that : greet(' ') ...", (done) => {
  expect.assertions(1);

  const result = greet(" ");
  greet();
  expect(result).toBe(`Hello  !`);
  done();
  done();
});
test("...to someone by his name...", (done) => {
  expect.assertions(1);

  const result = greet("JEAN");
  greet();
  expect(result).toBe(`Hello JEAN!`);
  done();
});
test("...with his name to uppercase...", (done) => {
  expect.assertions(1);

  const result = greet("Jean");
  expect(result).toBe(`Hello JEAN!`);
  done();
});
test("...with the default name 'WORLD' when called whithout argument.", (done) => {
  expect.assertions(1);

  const result = greet();
  expect(result).toBe(`Hello WORLD!`);
  done();
});
