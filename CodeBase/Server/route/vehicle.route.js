import express from "express";
import vehicleController from "../controller/vehicle.controller.js";
const vehicleRoute = express.Router();

vehicleRoute.post("/api/vehicle", vehicleController.createvehicle);

export default vehicleRoute;
