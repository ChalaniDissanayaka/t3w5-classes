// Define a Dog class with properties for name, breed, collar, and cuteness
class Dog {
    // Constructor method to initialize Dog object with name, breed, collar, age, and optional cuteness (default is true)
    constructor(newName, newBreed, newCollar, newAge, newCuteness = true) {
        // Assign instance properties based on constructor parameters
        this.name = newName;
        this.breed = newBreed;
        this.collar = newCollar;
        this.cuteness = newCuteness;

        // Increment the private static numberOfDogs count whenever a new Dog object is created
        // Dog.numberOfDogs++;
        Dog.#numberOfDogs++;
    }

    // Private static variable to keep track of the number of Dog instances
    static #numberOfDogs = 0;

    // Static getter for numberOfDogs, returns the current count of Dog instances
    static get numberOfDogs() {
        return Dog.#numberOfDogs;
    }

    // Static setter for numberOfDogs, though it doesn't actually modify the value
    static set numberOfDogs(newValue) {
        // return Dog.#numberOfDogs;
        throw new NumberOfDogsError();
    }

    // Static method to reset the number of Dog instances to zero
    static resetDogCount(){
        Dog.numberOfDogs = 0;
    }

    // Method to simulate barking and throw a custom error (BarkError)
    bark() {
        console.log("Woof! I am a " + this.name);
        // Throw a custom error when the dog barks
        throw new BarkError(this.name, this.breed);
    }
}

// Custom error class for when an attempt is made to set numberOfDogs directly
class NumberOfDogsError extends Error {
    // Constructor initializes the error message explaining why the action is not allowed
    constructor() {
        super("Cannot modify the number of dogs unless you're creating a dog via the Dog constructor.")
    }
}

// Create a new Dog object named "Fido" with specified breed, collar, and age
let fido = new Dog("Fido", "Frenchie", "Leather", 7);

console.log(Dog.numberOfDogs);

// Attempt to manually set the number of dogs, which will throw an error
Dog.numberOfDogs = 10;

console.log(Dog.numberOfDogs);

// console.log(fido);
// console.log(fido.cuteness);

// fido.bark();

// let someExampleError = new Error();

// Define a custom error class BarkError, which extends the built-in Error class
class BarkError extends Error {
    // Constructor method to initialize the error with a custom message that includes dog name and breed
    constructor(dogName, dogBreed) {
        super(`${dogName} of breed ${dogBreed} failed to bark.`);
    }
}

// Try-catch block to handle errors thrown when the dog barks
try {
    // Attempt to make the dog bark, which will throw an error
    fido.bark();
} catch (error){
    // throw new BarkError(fido.name, fido.breed);
    // console.log(typeof error);
    // If the error is an instance of BarkError, log a message indicating a bark error occurred
    if (error instanceof BarkError) {
        console.log("bark error occured.");
    }
}