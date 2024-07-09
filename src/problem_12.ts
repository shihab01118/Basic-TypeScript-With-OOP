{
  // Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

  // Solution:
  const myFunction = (param: unknown): void => {
    if (typeof param === "string") {
      console.log("It's a string");
    } else if (typeof param === "number") {
      console.log("It's a number");
    } else if (typeof param === "undefined") {
      console.log("It's undefined");
    }
  };
  myFunction('Hello World');
}
