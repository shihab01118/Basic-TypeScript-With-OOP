{
  // Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

  // Solution:
  const filterArray = <T>(arr: T[], predicate: (value: T) => boolean): T[] => {
    const filteredArray: T[] = [];

    for (const element of arr) {
      if (predicate(element)) {
        filteredArray.push(element);
      }
    }

    return filteredArray;
  };
}
