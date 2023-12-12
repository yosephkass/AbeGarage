export default {
  getEmployee: `SELECT * from employee`,
    getEmployeeByEmail: `SELECT * from employee WHERE employee_email = ?`,
  

    insertIntoEmployeeTable:`INSERT INTO employee (employee_email, active_employee, added_date)
VALUES (?, ?, NOW());`,
    
    insertEmployeeInfoTable:`INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone)
VALUES (?,?, ?, ?);`,
    
    
    insertEmployeePasswordTable:`INSERT INTO employee_pass (employee_id, employee_password_hashed)
VALUES (?, ?);`
    
    
    
};
