const mongoose = require("mongoose");
console.log("🚀 ~ file: commands.js:2 ~ mongoose:", mongoose);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/fleet_manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const Fleet = mongoose.model("Fleet", {
  user: String,
  vehicles: [
    {
      plateNumber: String,
      location: { lat: Number, lng: Number, alt: Number },
    },
  ],
});

const createFleet = async (userId) => {
  const fleet = new Fleet({ user: userId });
  await fleet.save();
  console.log(`Fleet created with ID: ${fleet._id}`);
};

const registerVehicle = async (fleetId, vehiclePlateNumber) => {
  const fleet = await Fleet.findById(fleetId);
  if (!fleet) {
    console.error("Fleet not found");
    return;
  }

  const existingVehicle = fleet.vehicles.find(
    (v) => v.plateNumber === vehiclePlateNumber
  );
  if (existingVehicle) {
    console.error("Vehicle already registered in this fleet");
    return;
  }

  fleet.vehicles.push({ plateNumber: vehiclePlateNumber });
  await fleet.save();
  console.log("Vehicle registered successfully");
};

const localizeVehicle = async (fleetId, vehiclePlateNumber, lat, lng, alt) => {
  const fleet = await Fleet.findById(fleetId);
  if (!fleet) {
    console.error("Fleet not found");
    return;
  }

  const vehicle = fleet.vehicles.find(
    (v) => v.plateNumber === vehiclePlateNumber
  );
  if (!vehicle) {
    console.error("Vehicle not found in this fleet");
    return;
  }

  vehicle.location = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    alt: parseFloat(alt),
  };
  await fleet.save();
  console.log("Vehicle localized successfully");
};

const parkVehicle = async (fleetId, vehiclePlateNumber, lat, lng, alt) => {
  try {
    const fleet = await Fleet.findById(fleetId);

    if (!fleet) {
      console.error("Fleet not found");
      return;
    }

    const vehicle = fleet.vehicles.find(
      (v) => v.plateNumber === vehiclePlateNumber
    );

    if (!vehicle) {
      console.error("Vehicle not found in this fleet");
      return;
    }

    vehicle.location = {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      alt: parseFloat(alt),
    };
    await fleet.save();

    console.log("Vehicle parked successfully");
  } catch (error) {
    console.error("Error parking vehicle:", error.message);
  }
};

module.exports = { createFleet, registerVehicle, localizeVehicle, parkVehicle };
