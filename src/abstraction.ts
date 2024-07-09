{
    // abstraction
    abstract class Shape {
        abstract calculateArea(): number;
    }

    class Rectangle extends Shape {
        // private _length: number;
        // private _width: number;

         constructor(private _length: number, private _width: number) {
            super()
         }

         calculateArea(): number {
             return this._length * this._width;
         }
    }

    const rectangle = new Rectangle(4, 5);
    console.log(rectangle.calculateArea());





    // 
}