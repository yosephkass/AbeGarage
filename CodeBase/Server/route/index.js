import express from "express";
import employeeRoute from "./employee.route.js";
import customerRoute from "./customer.route.js";
const appRoute = express.Router();


appRoute.use(employeeRoute);
appRoute.use(customerRoute);

export default appRoute;
