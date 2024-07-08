{
  // class
  class Car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
   

    constructor(
      brand: string,
      model: string,
      year: number,
      isElectric: boolean
    ) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.isElectric = isElectric;
    }

    // startEngine() {
    //     console.log("car engine started!");
    //   }
    // stopEngine() {
    //     console.log("car engine stopped!");
    // }
  }

  const myCar = new Car("BMW", "X5", 2020, true);

  console.log(myCar.brand)
  

  

  //
}
