{
  //  utility types
  type TPerson = {
    name: string;
    id: number;
    age: number;
    address?: string;
  };

  // partial utility type
  const person1: Partial<TPerson> = {
    name: "Shihab",
    // id: 1118,
    age: 24,
  };

  //   required utility type
  const person2: Required<TPerson> = {
    name: "Shihab",
    id: 1118,
    age: 24,
    address: "bangladesh",
  };

  // pick utility type
  type TPickType = Pick<TPerson, "name" | "age">; // type alias for pick utility
  const person3: TPickType = {
    name: "Shihab",
    age: 24,
  };

  //   omit utility type
  type TOmitType = Omit<TPerson, "address" | "id">; // type alias for omit utility
  const person4: TOmitType = {
    name: "Shihab",
    age: 24,
  };

  // readonly utility type
  type TPersonReadOnly = Readonly<TPerson>; // type alias for readonly utility
  const person5: TPersonReadOnly = {
    name: "Shihab",
    age: 24,
    id: 1118,
  };

  //   record utility type
  type TMyObj = Record<string, number>;

  const person6 : TMyObj = {
    a : 1,
    // b : "sdf"
  }

  //
}
