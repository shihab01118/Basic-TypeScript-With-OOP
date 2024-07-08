{
  // Implement a generic function called reverseArray that takes an array of any type and returns the revered version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

  // Solution:
  type TReverseArray = <T>(arr: T[]) => T[];

  const reverseArray: TReverseArray = (arr) => {
    // let reversedArray = [];

    // for (let i = arr.length - 1; i >= 0; i--) {
    //   reversedArray.push(arr[i]);
    // }

    // return reversedArray;
    return arr.reverse();
  };

  const arrayOfNumbers: number[] = [5, 6, 7, 8, 9];
  const arrayOfStrings: string[] = ["Hello", "World!", "shihab", "faysal"];
  const arrayOfBooleans: boolean[] = [true, false, false, true, false];

  const result1 = reverseArray(arrayOfNumbers);
  const result2 = reverseArray(arrayOfStrings);
  const result3 = reverseArray(arrayOfBooleans);
  console.log({ result1, result2, result3 });
}
