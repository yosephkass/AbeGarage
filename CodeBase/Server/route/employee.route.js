import express from "express";
import employeeController from "../controller/employee.controller.js";
const employeeRoute = express.Router();

employeeRoute.post("/api/employee", employeeController.createEmployee);
employeeRoute.put("/api/employee", employeeController.updateEmployeeInfo);
employeeRoute.delete("/api/employee", employeeController.deleteEmployeeInfo);
employeeRoute.get("/api/all-employee", employeeController.getEmployeeList);

export default employeeRoute;
