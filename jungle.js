class Animal {
  #name;
  #species;
  #energy;

  constructor(name, species, energy = 100) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
  }

  static remainingAnimals = 3;

  get name() {
    return this.#name;
  }
  set name(n) {
    return (this.#name = n);
  }

  get species() {
    return this.#species;
  }
  set species(s) {
    return (this.#species = s);
  }

  get energy() {
    return this.#energy;
  }
  set energy(e) {
    return (this.#energy = e);
  }

  attack(target) {
    if (this.energy > 0 && target.energy > 0) {
      this.energy -= 10;
      target.energy -= 10;

      if (this.energy > 0 && target.energy <= 0) {
        console.log(`${this.name} wins ${target.name}!`);
        Animal.remainingAnimals -= 1;
      } else if (this.energy <= 0 && target.energy > 0) {
        console.log(`${target.name} wins! ${this.name} is out of energy!`);
        Animal.remainingAnimals -= 1;
      } else if (this.energy <= 0 && target.energy <= 0) {
        console.log(`Both enemies are down...`);
        Animal.remainingAnimals -= 2;
      }
    }
  }

  eat() {
    this.energy += 10;
    console.log(
      `${this.name} eats and gains energy! ${this.name}'s energy: ${this.energy}`
    );
  }
}

class Bird extends Animal {
  #energy;
  #canFly;

  constructor(name, species, canFly, energy) {
    super(name, species);

    this.#energy = energy;
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }
  set canFly(c) {
    return (this.#canFly = c);
  }

  attack(target) {
    if (this.energy > 0 && target.energy > 0) {
      this.energy -= 20;
      target.energy -= 20;
      console.log(`${this.name} swoops in to attack ${target.name}!`);
      console.log(`${target.name}'s energy: ${target.energy}`);
      console.log(`${this.name}'s energy: ${this.energy}`);

      if (this.energy > 0 && target.energy <= 0) {
        console.log(`${this.name} wins! ${target.name} is out of energy!`);
        Animal.remainingAnimals -= 1;
      } else if (this.#energy <= 0 && target.energy > 0) {
        console.log(`${target.name} wins! ${this.name} is out of energy!`);
        Animal.remainingAnimals -= 1;
      } else if (this.#energy <= 0 && target.energy <= 0) {
        console.log(`Both enemies are down...`);
        Animal.remainingAnimals -= 2;
      }
    }
  }
}

class Mammal extends Animal {
  #energy;
  #furColor;

  constructor(name, species, furColor, energy) {
    super(name, species, 200);

    this.#energy = energy;
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }
  set furColor(f) {
    return (this.#furColor = f);
  }

  attack(target) {
    if (this.energy > 0 && target.energy > 0) {
      this.energy -= 50;
      target.energy -= 50;
      console.log(`${this.name} lunges to attack ${target.name}!`);
      console.log(`${target.name}'s energy: ${target.energy}`);
      console.log(`${this.name}'s energy: ${this.energy}`);

      if (this.energy > 0 && target.energy <= 0) {
        console.log(`${this.name} wins! ${target.name} is out of energy!`);
        Animal.remainingAnimals -= 1;
      } else if (this.energy <= 0 && target.energy > 0) {
        console.log(`${target.name} wins! ${this.name} is out of energy!`);
        Animal.remainingAnimals -= 1;
      } else if (this.energy <= 0 && target.energy <= 0) {
        console.log(`Both enemies are down...`);
        Animal.remainingAnimals -= 2;
      }
    }
  }

  eat() {
    this.energy += 20;
    console.log(
      `${this.name} eats and gains energy! ${this.name}'s energy: ${this.energy}`
    );
  }
}

class Reptile extends Animal {
  //   #energy = 100;
  #energy;
  #coldBlooded;

  constructor(name, species, coldBlooded, energy) {
    super(name, species);

    this.#energy = energy;
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }
  set coldBlooded(c) {
    return (this.#coldBlooded = c);
  }

  attack(target) {
    if (this.energy > 0 && target.energy > 0) {
      this.energy -= 30;
      target.energy -= 30;
      console.log(`${this.name} coblas in to attack ${target.name}!`);
      console.log(`${target.name}'s energy: ${target.energy}`);
      console.log(`${this.name}'s energy: ${this.energy}`);

      if (this.energy > 0 && target.energy <= 0) {
        console.log(`${this.name} wins! ${target.name} is out of energy!`);
        Animal.remainingAnimals -= 1;
      } else if (this.energy <= 0 && target.energy > 0) {
        console.log(`${target.name} wins! ${this.name} is out of energy!`);
        Animal.remainingAnimals -= 1;
      } else if (this.energy <= 0 && target.energy <= 0) {
        console.log(`Both enemies are down...`);
        Animal.remainingAnimals -= 2;
      }
    }
  }

  eat() {
    this.energy += 15;
    console.log(
      `${this.name} eats and gains energy! ${this.name}'s energy: ${this.energy}`
    );
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);
// console.log(eagle.energy);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);
console.log(lion.energy);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);
// console.log(snake.energy);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
lion.attack(snake);
lion.attack(snake);
console.log(" ");

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);
console.log(" ");

eagle.attack(lion);
eagle.attack(lion);
eagle.attack(lion);
eagle.attack(lion);
console.log(" ");

console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

Animal.remainingAnimals;
