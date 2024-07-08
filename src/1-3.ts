{
  // function
  // type TMyFunction = (param1: number, param2: number) => number;

  // const addNumbers: TMyFunction = (param1, param2) => {
  //   const sum = param1 + param2;
  //   return sum;
  // };

  // const  addNumbers: TMyFunction = (param1, param2) => {
  //   const sum = param1 + param2;
  //   return sum
  // }

  // console.log(addNumbers(2, 3))

  // write a function that calculates the multiplication of two numbers
  type TMyFunction = (param1: number, param2: number) => number

  const multiplication: TMyFunction = (param1, param2) => {
    const result = param1 * param2;
    return result
  }
}
