class RegisterVehicleUseCase {
  constructor(fleetRepository) {
    this.fleetRepository = fleetRepository;
  }

  execute(vehicle) {
    const fleet = this.fleetRepository.getFleet();

    if (!fleet.hasVehicle(vehicle)) {
      fleet.addVehicle(vehicle);
    } else {
      throw new Error("Vehicle already registered");
    }
  }
}

module.exports = RegisterVehicleUseCase;
