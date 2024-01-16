export default {
	validateForm: (form) => {
		let isValid = true;
		const errors = {}; //An empty object that will store error messages associated with invalid fields.

		// Validate employee email
		if (
			!form.employee_email ||
			!form.employee_email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			errors.employee_email = "Invalid employee email";
			isValid = false;
		}

		// Validate employee first name
		if (
			!form.employee_first_name ||
			!form.employee_first_name.match(/^[a-zA-Z]+$/)
		) {
			errors.employee_first_name = "Invalid employee first name";
			isValid = false;
		}

		// Validate employee last name
		if (
			!form.employee_last_name ||
			!form.employee_last_name.match(/^[a-zA-Z]+$/)
		) {
			errors.employee_last_name = "Invalid employee last name";
			isValid = false;
		}

		// Validate employee phone
		if (!form.employee_phone) {
			errors.employee_phone = "Employee phone is required";
			isValid = false;
		}

		// Validate user role
		if (!form.userRole) {
			errors.userRole = "User role is required";
			isValid = false;
		}

		// Validate employee password
		if (!form.employee_password) {
			errors.employee_password = "Employee password is required";
			isValid = false;
		}

		return { isValid, errors };
	},

	validateForm2: (form) => {
		let isValid = true;
		const errors = {}; //An empty object that will store error messages associated with invalid fields.

		// Validate employee email
		if (
			!form.customer_email ||
			!form.customer_email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			errors.customer_email = "Invalid customer email";
			isValid = false;
		}

		// Validate customer first name
		if (
			!form.customer_first_name ||
			!form.customer_first_name.match(/^[a-zA-Z]+$/)
		) {
			errors.customer_first_name = "Invalid customer first name";
			isValid = false;
		}

		// Validate customer last name
		if (
			!form.customer_last_name ||
			!form.customer_last_name.match(/^[a-zA-Z]+$/)
		) {
			errors.customer_last_name = "Invalid customer last name";
			isValid = false;
		}

		// Validate employee phone
		if (!form.customer_phone_number
			) {
			errors.customer_phone_number = "customer phone is required";
			isValid = false;
		}

		return { isValid, errors };
	},

	validateForm3: (form) => {
		let isValid = true;
		const errors = {}; //An empty object that will store error messages associated with invalid fields.

		// Validate customer first name
		if (
			!form.customer_first_name ||
			!form.customer_first_name.match(/^[a-zA-Z]+$/)
		) {
			errors.customer_first_name = "Invalid customer first name";
			isValid = false;
		}

		// Validate customer last name
		if (
			!form.customer_last_name ||
			!form.customer_last_name.match(/^[a-zA-Z]+$/)
		) {
			errors.customer_last_name = "Invalid customer last name";
			isValid = false;
		}

		// Validate employee phone
		if (!form.customer_phone_number) {
			errors.customer_phone_number = "customer phone is required";
			isValid = false;
		}

		return { isValid, errors };
	},
};
