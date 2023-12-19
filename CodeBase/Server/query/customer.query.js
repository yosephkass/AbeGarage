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

	getCustomerByID: `SELECT *
FROM customer_identifier
WHERE customer_id = ?;
`,

	//update
	updateCustomerInfoTable: `UPDATE customer_info SET customer_first_name = ?,
    customer_last_name = ?,
    active_customer_status = ?
    WHERE customer_id =?`,

	updateCustomerPhoneNumber: `UPDATE customer_identifier
SET customer_phone_number = ?
WHERE customer_id = ?`,
};

//update customer
// updateCustomerTable: ``;
/*UPDATE customer_info
SET customer_first_name = 'Test',
    customer_last_name = 'Test',
    active_customer_status = 1
WHERE customer_id = 1; *?

/*-- Inserting data into customer_identifier table
INSERT INTO customer_identifier (customer_email, customer_phone_number, customer_hash)
VALUES (?, ?, ?);

-- Retrieving the auto-generated customer_id
SET @customer_id = LAST_INSERT_ID();

-- Inserting data into customer_info table
INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status)
VALUES (?,?,?);

-- Inserting data into customer_vehicle_info table
INSERTINTO customer_vehicle_info (customer_id, vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color)
VALUES (?,?,?,?,?,?,?,?,?);*/

// insertIntocustomervehicleinfoTable: `INSERT INTO customer_identifier (customer_email, customer_phone_number, customer_added_date, customer_hash)
// VALUES (?, ?,NOW(),?)`,
