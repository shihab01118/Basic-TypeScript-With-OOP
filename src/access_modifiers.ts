{
    // access modifiers (public, static, private, protected, abstract, sealed, readonly)

    class Animal {
        // by default every property and method is public and can be accessed from anywhere in the program.
        public name: string;
        private _sound: string;
        protected color: string;

        constructor (name: string, sound: string, color: string) {
            this.name = name;
            this._sound = sound;
            this.color = color;
        }

        checkSound(): void {
            console.log(`This animal sounds like ${this._sound}`)
        }

        makeSound(): void {
            console.log("Animal makes sound");
        }
    }

    const animal = new Animal("Tommy", "meow", "ginger brown");
    animal.name = "Rocky";
    // animal.sound = "woof";  // this property is private, so it is not accessible from outer scope of the class.
    // animal.color = "brown"; // this property is protected, it is not accessible from outer scope of the class but can be accessible if the class is inherited by another class.

    class Cat extends Animal {
        constructor(name: string, sound: string, color: string) {
            super(name, sound, color);
        }
        checkColor(): void {
            console.log(`${this.name}'s color is ${this.color}.`)
        }
    }

    const cat = new Cat("Simba", "Meow", "graywhite");
    cat.checkColor()
    animal.checkSound();
    cat.checkSound()



    // 
}