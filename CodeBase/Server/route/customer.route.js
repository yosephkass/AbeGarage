import express from "express";
import customerController from "../controller/customer.controller.js";
const customerRoute = express.Router();

customerRoute.post("/api/customer", customerController.createCustomer);
customerRoute.put("/api/customer", customerController.updateCustomer);

export default customerRoute;
