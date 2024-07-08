{
  // type assertion
  const input: any = "Hello World!";

  const textLength = (input as string).length;
  console.log(textLength);

  type TFoo = {
    bar: string;
  };

  const foo = {} as TFoo;
  foo.bar = "something";

  let value: number | string;
  value = "shihab" as string;
  value = 1118;

  

  //
}
