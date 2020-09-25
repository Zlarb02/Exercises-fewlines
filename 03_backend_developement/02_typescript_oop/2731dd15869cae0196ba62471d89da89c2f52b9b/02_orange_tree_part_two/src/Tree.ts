// Paste your previous `Tree` class here.
abstract class Tree {
  age: number;
  height: number = 0;
  alive: boolean = true;
  constructor(age: number) {
    this.age = age;
    if (this.age <= 9) {
      this.height = this.height + 25 * this.age;
    } else if (this.age <= 20) {
      this.height = this.height + 10 * this.age + 135;
    } else if (this.age > 20) {
      this.height = 335;
    }
  }

  abstract ageOneYear(): void;

  abstract isAlive(): boolean;

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}

// Leave the line below for tests to work properly.
export { Tree };
