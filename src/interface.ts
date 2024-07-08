{
  // interface
  interface Car {
    brand: string;
    model: string;
    year?: number;
    isLatest: boolean;
    startEngine(): void;
    stopEngine(): void;
  }

  type TCar = {
    brand: string;
    model: string;
    year?: number;
    isLatest: boolean;
    startEngine(): void;
    stopEngine(): void;
  };

  const myCar: TCar = {
    brand: "Toyota",
    model: "Camry",
    // year: 2020,
    isLatest: true,
    startEngine() {
      console.log("Car Engine Started");
    },
    stopEngine() {
      console.log("Car Engine Stopped");
    },
  };

  console.log(myCar.year ?? "No Year");

  type NumbersList = number[];

  interface NumbersInterface {
    [index: number]: number;
  }

  const numbers: NumbersInterface = [1, 2, 3, 4];

  // type and interface in function
  type TSum = (num1: number, num2: number) => number;

  interface ISum {
    (num1: number, num2: number): number;
  }

  const add: ISum = (num1, num2) => num1 + num2;
  const result = add(4, 3);

  console.log(result);

  //
}
