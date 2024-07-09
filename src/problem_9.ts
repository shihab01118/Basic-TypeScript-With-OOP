{
  // Define two interfaces: Car with properties like make, model, and year adn Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

  // Solution:
  interface Car {
    make: string;
    model: string;
    year: number;
  }

  interface Driver {
    name: string;
    licenseNumber: string;
  }

  type CombineCarAndDriver = Car & Driver;

  const combineObjects = (car: Car, driver: Driver): CombineCarAndDriver => {
    return {...car, ...driver }
  }

  const car: Car = {
    make: "Latest",
    model: "Model",
     year: 2020
  }

  const driver: Driver = {
    name: "shihab",
    licenseNumber: "12321321"
  }

  console.log(combineObjects(car, driver));
}
