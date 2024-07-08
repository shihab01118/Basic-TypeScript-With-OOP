{
  // mapped type
  type TPerson = {
    name: string;
    id: number;
    age: number;
  };

//   type TPersonReadOnly = {
//     readonly name: string;
//     readonly id: number;
//     readonly age: number;
//   }

type TPersonReadOnly = { readonly [key in keyof TPerson] : TPerson[key]}

  const person1: TPerson = {
    name: "shihab",
    id: 1118,
    age: 24,
  };

  person1.name = "Shihab"

//   const person2 : TPersonReadOnly = person1;

//   person2.name = "shahed"

  //
}
