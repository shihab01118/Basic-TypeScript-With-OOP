{
  // type guards: typeof, in, instanceof
  const checkString = (param: any) => {
    if (typeof param === "string") {
      console.log("this is a string");
    } else {
      console.log("this is not a string");
    }
  };

  // checkString(322)

  interface Person {
    name: string;
    age: number;
    email: string;
  }

  const displayPersonInfo = (data: any) => {
    if ("password" in data) {
      console.log(data.name);
    } else {
      console.log("property 'password' does not exist in data");
    }
  };

  const person: Person = {
    name: "Shihab",
    age: 34,
    email: "shahed.shihab.0@gmail.com",
  };

  //   displayPersonInfo(person)

  // instanceof
  class Car {
    brand: string;

    constructor(brand: string) {
      this.brand = brand;
    }
  }

  const myFunction = (param: any) => {
    if (param instanceof Car) {
        console.log("This is a car");
    }
  }

  const car = new Car("Toyota")

  myFunction(car)
}
