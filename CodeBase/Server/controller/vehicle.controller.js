import vehicleService from "../service/vehicle.service.js";
const vehicleController = {
	createvehicle: async (req, res) => {
		// console.log(req.body);
		//Check all fields are provided
		const {
			vehicle_year,
			vehicle_make,
			vehicle_model,
			vehicle_type,
			vehicle_mileage,
			vehicle_tag,
			vehicle_serial,
			vehicle_color,
		} = req.body;

		if (
			!vehicle_year ||
			!vehicle_make ||
			!vehicle_model ||
			!vehicle_type ||
			!vehicle_mileage ||
			!vehicle_tag ||
			!vehicle_serial ||
			!vehicle_color
		) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}
		// Check to insert customer's vehicle information into the database.
		const vehicleinfo = await vehicleService.insertIntocustomer_vehicle_info(
			req.body
		);

		req.body.customer_id = vehicleinfo.insertId;

		// Send a message to confirm that the customer's vehicle has been successfully added.
		return res.status(200).json({
			success: true,
			message: "Vehicle Info added successfully!",
		});
	},
	updatevehicle: async (req, res) => {
		const {
			customer_id,
			vehicle_year,
			vehicle_make,
			vehicle_model,
			vehicle_type,
			vehicle_mileage,
			vehicle_tag,
			vehicle_serial,
			vehicle_color,
		} = req.body;

		if (
			!customer_id ||
			!vehicle_year ||
			!vehicle_make ||
			!vehicle_model ||
			!vehicle_type ||
			!vehicle_mileage ||
			!vehicle_tag ||
			!vehicle_serial ||
			!vehicle_color
		) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		const Custvehicle = await vehicleService.getCustomerByID(customer_id);

		if (!Custvehicle.length) {
			return res.status(400).json({
				success: false,
				message: "Customer not found",
			});
		}

		//Start updating customer's vehicle information
		const customerVehicleInfoUpdater =
			await vehicleService.updateIntoCustomerVehicleInfoTable(req.body);

		// send a message to confirm that the customer's vehicle information has recently been successfully updated.
		return res.status(200).json({
			success: true,
			message: "Customer's vehicle info updated successfully!",
		});
	},
};

export default vehicleController;
