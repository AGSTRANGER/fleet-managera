const User = require("./entities/User");
const Vehicle = require("./entities/Vehicle");
const Location = require("./entities/Location");

const FleetRepository = require("./repositories/FleetRepository");

const RegisterVehicleUseCase = require("./useCases/RegisterVehicleUseCase");
const ParkVehicleUseCase = require("./useCases/ParkVehicleUseCase");

const fleetRepository = new FleetRepository();
const registerVehicleUseCase = new RegisterVehicleUseCase(fleetRepository);
const parkVehicleUseCase = new ParkVehicleUseCase(fleetRepository);

const user1 = new User("1", "John Doe");
console.log("🚀 ~ file: app.js:15 ~ user1:", user1);
const vehicle1 = new Vehicle("1", "Car");
console.log("🚀 ~ file: app.js:17 ~ vehicle1:", vehicle1);
const location1 = new Location({ lat: 40.7128, lon: -74.006 });
console.log("🚀 ~ file: app.js:19 ~ location1:", location1);

try {
  registerVehicleUseCase.execute(vehicle1, user1);
  parkVehicleUseCase.execute(vehicle1, location1, user1);
  parkVehicleUseCase.execute(vehicle1, location1, user1);
  console.log("Vehicle parked successfully!");
} catch (error) {
  console.error(error.message);
}
