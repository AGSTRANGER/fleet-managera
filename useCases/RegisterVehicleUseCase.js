// useCases/RegisterVehicleUseCase.js
class RegisterVehicleUseCase {
  constructor(fleetRepository) {
    this.fleetRepository = fleetRepository;
  }

  execute(vehicle, user) {
    console.log(
      "🚀 ~ file: RegisterVehicleUseCase.js:8 ~ RegisterVehicleUseCase ~ execute ~ user:",
      user
    );
    const fleet = this.fleetRepository.getFleetByUser(user);
    console.log(
      "🚀 ~ file: RegisterVehicleUseCase.js:9 ~ RegisterVehicleUseCase ~ execute ~ fleet:",
      fleet
    );

    if (!fleet.hasVehicle(vehicle)) {
      fleet.addVehicle(vehicle);
      console.log(
        "🚀 ~ file: RegisterVehicleUseCase.js:12 ~ RegisterVehicleUseCase ~ execute ~ fleet:",
        fleet
      );
    } else {
      console.log(
        "🚀 ~ file: RegisterVehicleUseCase.js:24 ~ RegisterVehicleUseCase ~ execute ~ Vehicle already registered:"
      );
      throw new Error("Vehicle already registered");
    }
  }
}

module.exports = RegisterVehicleUseCase;
