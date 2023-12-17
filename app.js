const Vehicle = require("./entities/Vehicle");
const Location = require("./entities/Location");

const FleetRepository = require("./repositories/FleetRepository");

const RegisterVehicleUseCase = require("./useCases/RegisterVehicleUseCase");
const ParkVehicleUseCase = require("./useCases/ParkVehicleUseCase");

const fleetRepository = new FleetRepository();
const registerVehicleUseCase = new RegisterVehicleUseCase(fleetRepository);
const parkVehicleUseCase = new ParkVehicleUseCase(fleetRepository);

const vehicle1 = new Vehicle("1", "Car");
const location1 = new Location({ lat: 40.7128, lon: -74.006 });

try {
  registerVehicleUseCase.execute(vehicle1);
  parkVehicleUseCase.execute(vehicle1, location1);
  console.log("Vehicle parked successfully!");
} catch (error) {
  console.error(error.message);
}
