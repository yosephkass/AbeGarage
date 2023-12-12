import express from "express";
import employeeRoute from "./employee.route.js";
const appRoute = express.Router();

appRoute.use(employeeRoute);

export default appRoute;
