#!/usr/bin/env node

// cli.js
const {
  createFleet,
  registerVehicle,
  localizeVehicle,
  parkVehicle,
} = require("./commands");

const args = process.argv.slice(2);

const command = args[0];

switch (command) {
  case "create":
    createFleet(args[1]);
    break;
  case "register-vehicle":
    registerVehicle(args[1], args[2]);
    break;
  case "localize-vehicle":
    localizeVehicle(args[1], args[2], args[3], args[4], args[5]);
    break;
  case "park-vehicle":
    parkVehicle(args[1], args[2], args[3], args[4], args[5]);
    break;
  default:
    console.error("Invalid command");
}
