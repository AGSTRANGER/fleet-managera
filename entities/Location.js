class Location {
  constructor(coordinates) {
    this.coordinates = coordinates;
  }

  equals(otherLocation) {
    return (
      this.coordinates.lat === otherLocation.coordinates.lat &&
      this.coordinates.lon === otherLocation.coordinates.lon
    );
  }
}

module.exports = Location;
