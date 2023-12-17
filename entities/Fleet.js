class Fleet {
  constructor(user) {
    this.user = user;
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
