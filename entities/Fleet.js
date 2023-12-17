class Fleet {
  constructor() {
    this.vehicles = [];
  }

  addVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }

  hasVehicle(vehicle) {
    return this.vehicles.some((v) => v.id === vehicle.id);
  }
}

module.exports = Fleet;
