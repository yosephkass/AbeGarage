import express from "express";
import employeeController from "../controller/employee.controller.js";
const employeeRoute = express.Router();

employeeRoute.post("/api/employee", employeeController.createEmployee)


export default employeeRoute;