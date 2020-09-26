import { greet } from "./index";
describe("There is a function greet...", () => {
  it("should be defined.", () => {
    expect.assertions(1);
    expect(greet).toBeDefined();
  });
  it("should be able to greet someone by his name...", () => {
    expect.assertions(1);

    const result = greet("JEAN");
    expect(result).toBe(`Hello JEAN!`);
  });
  test("...with his name to uppercase...", () => {
    expect.assertions(1);

    const result = greet("Jean");
    expect(result).toBe(`Hello JEAN!`);
  });
  test("...with the default name 'WORLD' when called whithout argument.", () => {
    expect.assertions(1);

    const result = greet();
    expect(result).toBe(`Hello WORLD!`);
  });
});
