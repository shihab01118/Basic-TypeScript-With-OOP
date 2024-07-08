{
  // array declaration
  // const arrOfNumbers: number[] = [1, 2, 3];
  // const arrOfStrings: string[] = ['Hello', 'World'];
  // const arrOfBooleans: boolean[] = [true, false, true];

  // const arrOfNumbers: Array<number> = [1, 2, 3];
  // const arrOfStrings: Array<string> = ['Hello', 'World'];
  // const arrOfBooleans: Array<boolean> = [true, false, true];

  // generics
  type GenericArray<T> = Array<T>;

  const arrOfNumbers: GenericArray<number> = [1, 2, 3];
  const arrOfStrings: GenericArray<string> = ["Hello", "World"];
  const arrOfBooleans: GenericArray<boolean> = [true, false, true];

  // interface with generics
  interface IUser<T, U> {
    id: T;
    name: string;
    age: number;
    profileInfo: U;
  }

  const user1: IUser<number, { bio: string; img: string }> = {
    id: 1118,
    name: "Shihab",
    age: 25,
    profileInfo: {
      bio: "Next Level Web Developer",
      img: "profile-picture",
    },
  };

  const user2: IUser<string, { bio: string; dateOfBirth: string }> = {
    id: "1118",
    name: "joy",
    age: 23,
    profileInfo: {
      bio: "this is bio",
      dateOfBirth: "29 apr 2000",
    },
  };

  // normal function 
  // const showMessage = (input: string) : string => {
  //   return input;
  // }

  // function with generics
  const showMessage = <T>(input: T) : T => {
    return input;
  } 

  const result1 = showMessage<string>("Hello World")
  const result2 = showMessage<number>(123)
  const result3 = showMessage<boolean>(true)
  // console.log({result1, result2, result3});

  // constraints
  const squareNumber = <T extends number>(num: T) => num * num;

  // console.log(squareNumber<number>(5));

  //
}
