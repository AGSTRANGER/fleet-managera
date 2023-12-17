const Fleet = require("../entities/Fleet");
class FleetRepository {
  constructor() {
    this.fleet = new Fleet();
  }

  getFleet() {
    return this.fleet;
  }
}

module.exports = FleetRepository;
