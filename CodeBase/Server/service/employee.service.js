import { query } from "../config/pool.js";
import employeeQuery from "../query/employee.query.js";

const employeeService = {
	getEmployeeByEmail: async (data) => {
		try {
			const row = await query(employeeQuery.getEmployeeByEmail, [data]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntoEmployee: async (data) => {
		try {
			const row = await query(employeeQuery.insertIntoEmployeeTable, [
				data.employee_email,
				data.active_employee,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntoEmployeeInfo: async (data) => {
		try {
			const row = await query(employeeQuery.insertEmployeeInfoTable, [
				data.employee_id,
				data.employee_first_name,
				data.employee_last_name,
				data.employee_phone,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntoEmployeePassword: async (data) => {
		console.log(employeeQuery.insertEmployeePasswordTable);
		console.log(data);
		try {
			const row = await query(employeeQuery.insertEmployeePasswordTable, [
				data.employee_id,
				data.employee_password_hashed,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	createEmployee: async (data) => {
		try {
			const row = await query(employeeQuery.getEmployee);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntoEmployeeRole: async (data) => {
		try {
			const row = await query(employeeQuery. insertEmployeeRoleTable,[data.employee_id,data.company_role_id]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

};

export default employeeService;
