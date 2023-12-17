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
const user2 = new User("2", "Sam Altman");
console.log("🚀 ~ file: app.js:15 ~ user1:", user1);
console.log("🚀 ~ file: app.js:16 ~ user2:", user2);

const vehicle1 = new Vehicle("1", "Car");
console.log("🚀 ~ file: app.js:17 ~ vehicle1:", vehicle1);
const location1 = new Location({ lat: 40.7128, lon: -74.006 });
console.log("🚀 ~ file: app.js:19 ~ location1:", location1);

try {
  // Feature 1. Scenario 1: I can register a vehicle
  // WORKS
  registerVehicleUseCase.execute(vehicle1, user1);

  // Feature 1. Scenario 2: I can't register same vehicle twice
  // THROWS AN ERROR
  // Since I can't register same car twice
  // So I commented it
  // registerVehicleUseCase.execute(vehicle1, user1);

  // Feature 1. Scenario 3: Same vehicle can belong to more than one fleet
  // WORKS
  registerVehicleUseCase.execute(vehicle1, user2);

  // Feature 2. Scenario 1: Successfully park a vehicle
  // WORKS
  parkVehicleUseCase.execute(vehicle1, location1, user1);

  // Feature 2. Scenario 2: Can't localize my vehicle to the same location two times in a row
  // THROWS AN ERROR
  // Since vehicle has already been parked here
  // So I commented it
  // parkVehicleUseCase.execute(vehicle1, location1, user1);
  console.log("Vehicle parked successfully!");
} catch (error) {
  console.error(error.message);
}
