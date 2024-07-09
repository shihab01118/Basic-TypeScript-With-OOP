{
    // polymorphism: 1. compile-time polymorphism 2. run-time polymorphism

    // compile-time polymorphism - method overloading
    class Calculator {
        add(x: number, y: number): number {
            return x + y;
        }

        add(x: string, y: string): string {
            return x + y;
        }
    }

    const calc = new Calculator();
    const result1 = calc.add(2, 3);
    const result2 = calc.add("shihab", "oishi")
    // console.log(result1);
    // console.log(result2)

    // run time polymorphism - method overriding
    class Animal {
        public name: string;
        private _age: number;
        protected sound: string;

        constructor (name: string, _age: number, sound: string) {
            this.name = name;
            this._age = _age;
            this.sound = sound;
        }

        makeNoise(): void {
            console.log(`${this.name} is making noise like ${this.sound}`);
        }
    }

    class Cat extends Animal {
        constructor (name: string, _age: number, sound: string) {
            super(name, _age, sound)
        }

        makeNoise (): void {
            console.log(`Your dad loves cat.`)
        } 
    }



    // 
}