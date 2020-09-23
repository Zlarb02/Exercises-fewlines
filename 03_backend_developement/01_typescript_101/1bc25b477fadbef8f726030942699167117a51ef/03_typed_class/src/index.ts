class Bird {
  // Write your code here.
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }
  fly(time: number): void {
    let distance: number = 1;
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    } else if (this.age <= 3) {
      console.log(`The bird flew ${distance * time}m in ${time}s`);
    } else if (this.age > 3) {
      distance = 2;
      console.log(`The bird flew ${distance * time}m in ${time}s`);
    }
  }
}

const newBird = new Bird(4);
newBird.fly(1);

// Leave the line below for tests to work properly.
export { Bird };
