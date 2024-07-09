{
  // Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

  // Solution:

  const makeUpperCase = (value: string | string[]): string | string[] => {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else if (Array.isArray(value)) {
      const newArray = value.map((item) => item.toUpperCase());
      return newArray;
    } else {
      throw new Error("Invalid Input");
    }
  };

  const str: string = "hello";
  const strArr: string[] = ["hi", "bye"];
  const numberArray: number[] = [1,2,3]

  console.log(makeUpperCase(str))
  console.log(makeUpperCase(strArr))
//   console.log(makeUpperCase(5))
}
