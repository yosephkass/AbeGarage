import express from "express";
import customerController from "../controller/customer.controller.js";
const customerRoute = express.Router();

customerRoute.post("/api/customer", customerController.createCustomer);
customerRoute.put("/api/customer", customerController.updateCustomer);
customerRoute.delete("/api/customer", customerController.deleteCustomer);
customerRoute.get("/api/customer", customerController.allcustomer);

// customerRoute.delete("/api/customer/:customerId", customerController.deleteCustomer);

export default customerRoute;
