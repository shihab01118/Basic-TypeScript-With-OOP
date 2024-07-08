{
  // Define a type alias called Coordinates that represents the latitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

  // Solution:
  type TCoordinates = {
    latitude: number;
    longitude: number;
  };

  const coordinates1: TCoordinates = { latitude: 0, longitude: 0 };
  const coordinates2: TCoordinates = { latitude: 10.45, longitude: 5.34 };
}
