// useCases/ParkVehicleUseCase.js
class ParkVehicleUseCase {
  constructor(fleetRepository) {
    this.fleetRepository = fleetRepository;
  }

  execute(vehicle, location, user) {
    const fleet = this.fleetRepository.getFleetByUser(user);

    if (!fleet.hasVehicle(vehicle)) {
      throw new Error("Vehicle not registered");
    }

    // Logic to handle parking at the location
    // This can involve checking if the vehicle is already parked at the given location

    // For simplicity, assuming Location has a method equals() to compare locations
    if (
      vehicle.lastParkedLocation &&
      vehicle.lastParkedLocation.equals(location)
    ) {
      console.log(
        "🚀 ~ file: ParkVehicleUseCase.js:25 ~ ParkVehicleUseCase ~ execute ~ Vehicle already parked at this location:"
      );
      throw new Error("Vehicle already parked at this location");
    }

    console.log(
      "🚀 ~ file: ParkVehicleUseCase.js:29 ~ ParkVehicleUseCase ~ execute ~ location:",
      location
    );
    vehicle.lastParkedLocation = location;
  }
}

module.exports = ParkVehicleUseCase;
