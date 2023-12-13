export default {
  getCustomerByEmail: `SELECT *
FROM customer_identifier
WHERE customer_email = ?;
`,

  insertIntoCustomerIdentifierTable: `INSERT INTO customer_identifier (customer_email, customer_phone_number, customer_added_date, customer_hash)
VALUES (?, ?,NOW(),?)`,

  insertCustomerInfoTable: `INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status)
VALUES (?,?,?,?);`,

  insertCustomerVehicleInfoTable: `INSERT INTO customer_vehicle_info (customer_id, vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color)
VALUES (?,?,?,?,?,?,?,?,?);`,
};

/*-- Inserting data into customer_identifier table
INSERT INTO customer_identifier (customer_email, customer_phone_number, customer_hash)
VALUES (?, ?, ?);

-- Retrieving the auto-generated customer_id
SET @customer_id = LAST_INSERT_ID();

-- Inserting data into customer_info table
INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status)
VALUES (?,?,?);

-- Inserting data into customer_vehicle_info table
INSERT INTO customer_vehicle_info (customer_id, vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color)
VALUES (?,?,?,?,?,?,?,?,?);*/



