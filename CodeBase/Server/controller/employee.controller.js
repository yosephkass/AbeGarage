import employeeService from "../service/employee.service.js";
import bcrypt from "bcrypt";

const employeeController = {
	createEmployee: async (req, res) => {
		//Check all fields are provided
		const {
			employee_email,
			employee_first_name,
			employee_last_name,
			employee_phone,
			active_employee,
			employee_password,
			company_role_id
		} = req.body;

		if (
			!employee_email ||
			!employee_first_name ||
			!employee_last_name ||
			!employee_phone ||
			!active_employee ||
			!employee_password ||
			!company_role_id
		) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		//Check email is unique
		const isEmployee = await employeeService.getEmployeeByEmail(employee_email);

		if (isEmployee.length) {
			return res.status(400).json({
				success: false,
				message: "The email is already in use",
			});
		}
		// console.log(isEmployee);

		//check if password is encrypted
		const salt = bcrypt.genSaltSync(10);
		req.body.employee_password_hashed = bcrypt.hashSync(
			employee_password,
			salt
		);

		//check to insert data into database
		const employee = await employeeService.insertIntoEmployee(req.body);

		req.body.employee_id = employee.insertId;

		const employeeInfo = await employeeService.insertIntoEmployeeInfo(req.body);

		const employeePassword = await employeeService.insertIntoEmployeePassword(
			req.body
		);
		// add role 
		const employeeRole = await employeeService.insertIntoEmployeeRole({employee_id: req.body.employee_id, company_role_id: company_role_id});


		//send a message to confirm sucess
		return res.status(200).json({
			success: true,
			message: "Employee added successfully!",
		});
	},
};

export default employeeController;
