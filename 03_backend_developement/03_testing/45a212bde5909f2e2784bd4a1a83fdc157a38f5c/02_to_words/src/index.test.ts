import { toWords } from "./index";

describe("There is a function toWords.", () => {
  it("should be able to split a string like that...", () => {
    expect.assertions(1);

    const result = toWords("JEAN JEAN");
    expect(result).toEqual(["JEAN", "JEAN"]);
  });
  it("should works like that too !", () => {
    expect.assertions(1);

    const result = toWords(
      `"-Bonjour Jean, comment allez vous ? - Je sais pas je test ! "`
    );
    expect(result).toEqual([
      "Bonjour",
      "Jean",
      "comment",
      "allez",
      "vous",
      "Je",
      "sais",
      "pas",
      "je",
      "test",
    ]);
  });
});
