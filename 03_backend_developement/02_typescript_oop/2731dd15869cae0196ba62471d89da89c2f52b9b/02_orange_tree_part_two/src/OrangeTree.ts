import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: any = [];
  constructor(age: number) {
    super(age);
  }
  ageOneYear(): void {
    if (this.isAlive() == true) {
      this.age = this.age + 1;
      this.growOranges();
      if (this.age <= 9) {
        this.height += 25;
      } else if (this.age <= 20) {
        this.height += 10;
      }
    }
  }

  isAlive(): boolean {
    return (this.alive = true);
  }
  growOranges(): void {
    if (this.age <= 4) {
      this.oranges = [];
    } else if (this.age >= 5 && this.age <= 10) {
      for (let i: number = 0; i < 10; i++) {
        this.oranges.push("🍊");
      }
    } else if (this.age >= 11 && this.age <= 20) {
      for (let i: number = 0; i < 20; i++) {
        this.oranges.push("🍊");
      }
    } else if (this.age >= 21 && this.age <= 40) {
      for (let i: number = 0; i < 5; i++) {
        this.oranges.push("🍊");
      }
    }
  }

  pickAnOrange(): void {
    if(this.oranges != []){
        
    }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
