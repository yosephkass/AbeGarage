import express from "express";
import employeeRoute from "./employee.route.js";
import customerRoute from "./customer.route.js";
import vehicleRoute from "./vehicle.route.js";
/*All routes will be imported here */

const appRoute = express.Router();
appRoute.use(employeeRoute);
appRoute.use(customerRoute);
appRoute.use(vehicleRoute);
/*Mounts the routes here */

export default appRoute;
