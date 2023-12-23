import { query } from "../config/pool.js";
import customerQuery from "../query/customer.query.js";

const vehicleService = {
	getCustomerByID: async (data) => {
		try {
			const row = await query(customerQuery.getCustomerByID, [data]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntocustomer_vehicle_info: async (data) => {
		try {
			const row = await query(customerQuery.insertCustomerVehicleInfoTable, [
				data.customer_id,
				data.vehicle_year,
				data.vehicle_make,
				data.vehicle_model,
				data.vehicle_type,
				data.vehicle_mileage,
				data.vehicle_tag,
				data.vehicle_serial,
				data.vehicle_color,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},
	updateIntoCustomerVehicleInfoTable: async (data) => {
		try {
			const row = await query(customerQuery.updateCustomerVehicleInfoTable, [
				data.customer_id,
				data.vehicle_year,
				data.vehicle_make,
				data.vehicle_model,
				data.vehicle_type,
				data.vehicle_mileage,
				data.vehicle_tag,
				data.vehicle_serial,
				data.vehicle_color,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},
};

export default vehicleService;
