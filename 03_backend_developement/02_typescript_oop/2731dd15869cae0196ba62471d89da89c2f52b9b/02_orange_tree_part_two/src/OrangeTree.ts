import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: any = [];

  ageOneYear(): void {
    this.age += 1;

    if (this.age < 10) {
      this.height += 25;
    } else if (this.age >= 10 && this.age <= 20) {
      this.height += 10;
    }

    this.alive = this.isAlive();

    this.growOranges();
  }
  isAlive(): boolean {
    if (this.age < 50) {
      return true;
    }
    if (this.age >= 100) {
      return false;
    } else {
      const dieProbability: number = (this.age - 50) / 50;

      const itsAlive: boolean = Math.random() > dieProbability;
      return itsAlive;
    }
  }

  private handleOrangeGrowth(num: number): void {
    for (let i = 0; i < num; i++) {
      this.oranges.push("🍊");
    }
  }

  growOranges(): void {
    this.oranges = [];

    let num = 0;

    if (this.age >= 5 && this.age <= 10) {
      num = 10;
    } else if (this.age > 10 && this.age <= 20) {
      num = 20;
    } else if (this.age > 20 && this.age <= 40) {
      num = 5;
    }

    num && this.handleOrangeGrowth(num);
  }
  pickAnOrange(): void {
    if (this.oranges != []) {
      this.oranges.pop();
      console.log("You picked one 🍊.");
    } else {
      console.log("There is no 🍊.");
    }
  }
  seed(): void {
    super.seed();
    this.oranges = [];
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
