{
  // Asynchronous TS

  interface IProfile {
    name: string;
    age: number;
    country: string;
  }

  const data: IProfile = {
    name: "Shihab",
    age: 24,
    country: "BD",
  };

  const getPromise = (): Promise<IProfile> => {
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      }
      reject("No data found!");
    });
  };

  //   console.log(getPromise());

  const asyncFunction = async () => {
    const result = await getPromise();
    console.log(result);
  };

  // asyncFunction();

  interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const fetchData = async (): Promise<IPost[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // console.log(data)
    return data;
  };

  // const result = fetchData();
  // console.log(result);

  const showData = async () => {
    const result = await fetchData();
    console.log(result);
  };

  showData();

  //
}
