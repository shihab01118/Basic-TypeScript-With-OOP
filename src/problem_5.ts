{
  // Create a generic interface called Repository that represents a generic data repository. it should have methods like getAll, getById, create, update and delete. Define the types for the methods and create a class that implements this interface.

  // Solution:
  interface Repository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
    create(item: T): void;
    update(item: T): void;
    delete(id: number): void;
  }

  class GenericRepository<T extends { id: number }> implements Repository<T> {
    private items: T[];

    constructor() {
      this.items = [];
    }

    create(item: T): void {
      this.items.push(item);
    }

    getAll(): T[] {
      return this.items;
    }

    getById(id: number): T | undefined {
      return this.items.find((item: T) => item.id === id);
    }

    update(item: T): void {
      const index = this.items.findIndex(
        (existingItem: T) => existingItem.id === item.id
      );

      if (index !== -1) {
        this.items[index] = item;
      }
    }

    delete(id: number): void {
      const index = this.items.findIndex(
        (existingItem: T) => existingItem.id === id
      );

      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }

  interface IProgrammer {
    id: number;
    name: string;
    email: string;
    city: string;
    country: string;
  }

  const programmersRepository = new GenericRepository<IProgrammer>();

  programmersRepository.create({
    id: 1118,
    name: "shihab",
    email: "shahed.shihab.0@gmail.com",
    city: "Dhaka",
    country: "Bangladesh",
  });

  programmersRepository.create({
    id: 1099,
    name: "Atik Shahriar",
    email: "atik.pu@gmail.com",
    city: "Dhaka",
    country: "Bangladesh",
  });

  programmersRepository.update({
    id: 1118,
    name: "Shahed Al Amin Shihab",
    email: "shahed.shihab.0@gmail.com",
    city: "Dhaka",
    country: "Bangladesh",
  });

  programmersRepository.delete(1099);

  console.log(programmersRepository.getAll());
}
