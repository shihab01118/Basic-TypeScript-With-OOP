{
  // Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Circle, Rectangle and Triangle. Implement the calculatedArea method in each subclass and test it with different dimensions.

  // Solution:
  abstract class Shape {
    abstract calculateArea(): number;
  }

  class Rectangle extends Shape {
    private width;
    private height;

    constructor(width: number, height: number) {
      super();
      this.height = height;
      this.width = width;
    }

    calculateArea(): number {
      return this.height * this.width;
    }
  }
  const rectangle = new Rectangle(10, 10);

  //   console.log(rectangle.calculateArea());

  class Circle extends Shape {
    private radius;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  const circle = new Circle(5);
  console.log(circle.calculateArea());
}
