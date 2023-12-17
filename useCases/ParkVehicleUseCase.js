class ParkVehicleUseCase {
  constructor(fleetRepository) {
    this.fleetRepository = fleetRepository;
  }

  execute(vehicle, location) {
    const fleet = this.fleetRepository.getFleet();

    if (!fleet.hasVehicle(vehicle)) {
      throw new Error("Vehicle not registered");
    }
    // #TODELETE
    // Logic to handle parking at the location
    // This can involve checking if the vehicle is already parked at the given location

    // For simplicity, assuming Location has a method equals() to compare locations
    if (
      vehicle.lastParkedLocation &&
      vehicle.lastParkedLocation.equals(location)
    ) {
      throw new Error("Vehicle already parked at this location");
    }

    vehicle.lastParkedLocation = location;
  }
}

module.exports = ParkVehicleUseCase;
