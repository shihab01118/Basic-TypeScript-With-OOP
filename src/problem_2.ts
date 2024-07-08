// Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

// Solution:
interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = {
  name: "Shihab",
  age: 24,
  email: "shahed.shihab.0@gmail.com",
};

console.log(person.name, person.age, person.email);
