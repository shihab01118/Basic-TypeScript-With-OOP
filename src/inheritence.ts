{
    // inheritence 
    class Animal {
        name: string;
        spice: string;

        constructor (name: string, spice: string) {
            this.name = name;
            this.spice = spice;
        }

        makeSound (): void {
            console.log(`Animal makes sound`)
        }
    } 

    class Dog extends Animal {
        breed: string;

        constructor(name: string, spice: string, breed: string) {
            super(name, spice);
            this.breed = breed;
        }

        makeSound(): void {
            console.log(`${this.name} makes sound`)
        }
    }

    const dog = new Dog("Tommy", "persian", "local")
    dog.makeSound();

}