{
    // encapsulation
    class Person {
       private _name: string;
       private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        findName(): void {
            console.log(this._name);
        }

        get getName(): string {
            return this._name;
        }

        set setName(name : string) {
            this._name = name;
        }
    }

    const person1 = new Person("Shihab", 23);
    // console.log(person1._name)
    person1.findName(); // Shihab
    console.log(person1.getName) // Shihab

    person1.setName = "Atik"
    console.log(person1.getName) // Atik
    



    // 
}