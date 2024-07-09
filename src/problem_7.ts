{
  // Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). create a function that takes a Color value as input and prints out a corresponding message. (e.g., "You selected Red")

  // Solution:
  enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue",
  }

  const printColorMessage = (color: Color): void => {
    switch (color) {
      case Color.Red:
        console.log("You selected Red");
        break;
      case Color.Green:
        console.log("You selected Green");
        break;
      case Color.Blue:
        console.log("You selected Blue");
        break;
      default:
        console.log("Unknown Color");
    }
  };

  const selectedColor: Color = Color.Blue;
  printColorMessage(selectedColor);
}
