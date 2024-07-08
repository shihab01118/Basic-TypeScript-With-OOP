{
  // Write a function called calculateArea that takes the length and width of a rectange as parameters and returns its area. Define the types for the input parameters and return value.

  // Solution:
  type TCalculateArea = (length: number, width: number) => number;

  const calculateArea: TCalculateArea = (length, width) => {
    return length * width;
  };

  const result = calculateArea(10.5, 5);
  console.log(result)
}
