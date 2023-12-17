const Fleet = require("../entities/Fleet");
class FleetRepository {
  constructor() {
    this.fleets = [];
  }

  getFleetByUser(user) {
    let fleet = this.fleets.find((f) => f.user.id === user.id);

    if (!fleet) {
      fleet = new Fleet(user);
      this.fleets.push(fleet);
    }

    return fleet;
  }
}

module.exports = FleetRepository;

module.exports = FleetRepository;
