// Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and the return value.

// Solution:
type TSumOfNumbers = (numbers : number[]) => number;

const sumOfNumbers : TSumOfNumbers = (numbers) => {
    let sum = 0;
    for (let i = 0; i <= numbers.length - 1; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOfNumbers([ 1, 2, 3, 4]);
console.log(result)