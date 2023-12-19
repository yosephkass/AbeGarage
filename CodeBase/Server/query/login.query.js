export default {
  getEmployeeByEmail: `SELECT * from employee WHERE employee_email = ?`,
  getEmployeeByPassword: `SELECT * from employee_pass WHERE employee_id = ?`,
};