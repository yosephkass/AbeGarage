export default {
	getEmployee: `SELECT * from employee`,

	getEmployeeByEmail: `SELECT * from employee WHERE employee_email = ?`,

	getEmployeeById: `SELECT * FROM employee WHERE employee_id = ?;`,

	insertIntoEmployeeTable: `INSERT INTO employee (employee_email, active_employee, added_date)
VALUES (?, ?, NOW());`,

	insertEmployeeInfoTable: `INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone)
VALUES (?,?, ?, ?);`,

	insertEmployeePasswordTable: `INSERT INTO employee_pass (employee_id, employee_password_hashed)
VALUES (?, ?);`,

	insertEmployeeRoleTable: `INSERT INTO employee_role (employee_id, company_role_id)
    VALUES (?, ?);`,

	updateEmployeeInfo: `UPDATE employee_info 
    SET employee_first_name = ?, employee_last_name = ?, employee_phone = ?
    WHERE employee_id = ?;`,

	deleteEmployeeInfo: `DELETE FROM employee_info
	WHERE employee_id = ?;`,
};
