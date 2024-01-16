import React, { useState } from "react";
import "./addEmployee.css";
import validateForm from "../../../../util/validation";
import axios from "../../../../util/axios";

const AddEmployee = () => { 
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});

	const hadleSubmit = async (e) => {
		// asynchronous function that handles form submission.
		e.preventDefault(); //prevents the default form submission behavior using
		const isvalid = validateForm(form); // to check if the form inputs are valid and stores the result in the isvalid variable.
		console.log(isvalid);
		if (!isvalid.isValid) {
			console.log(isvalid.errors);
		} else {
			try {
				form.active_employee = 1;
				const responce = await axios.post("/api/employee", form); //it proceeds to make an HTTP POST request using axios to the "/api/employee" endpoint.
				if (responce.data.success) { //displays an alert with the success message, and reloads the page.
					e.target.value = "";
					alert(responce.data.message);
					window.location.reload();
				}
			} catch (error3) {
				alert(error3.response.data.message); //If there is an error in the HTTP request, it displays an alert with the error message.
			}
		}
	};

	return (
		<> 
			<div className="form-column col-lg-7">
				<div className="inner-column">
					<div className="contact-form sec-title style-two">
						<br /><br />
						<h2>Add a new employee</h2>
						<br />
						<br /><br />
						<form onSubmit={hadleSubmit} id="contact-form">
							<div className="row clearfix">
								<div className="form-group col-md-12">
									<input //Each input field is associated with an onChange event handler, which updates the form state with the new input value when the user types into the field.
										type="email"
										name="employee_email"
										placeholder="Employee Email"
										required
										onChange={(e) => {
											//  'e' is a parameter of the event handler function
											setForm({
												...form,
												employee_email: e.target.value, // 'e.target.value' retrieves the current value of the input field that triggered the event.
											});
										}}
									/>
								</div>
								<div className="form-group col-md-12">
									<input
										type="text"
										name="employee_first_name"
										placeholder="Employee First Name"
										required
										onChange={(e) => {
											setForm({
												...form,
												employee_first_name: e.target.value,
											});
										}}
									/>
								</div>
								<div className="form-group col-md-12">
									<input
										type="text"
										name="employee_last_name"
										placeholder="Employee last  Name"
										required
										onChange={(e) => {
											setForm({
												...form,
												employee_last_name: e.target.value,
											});
										}}
									/>
								</div>
								<div className="form-group col-md-12">
									<input
										type="text"
										name="employee_phone"
										placeholder="Employee phone"
										required
										onChange={(e) => {
											setForm({
												...form,
												employee_phone: e.target.value,
											});
										}}
									/>
								</div>
								<div className="form-group col-md-12">
									<select
										name="userRole"
										id="roleId"
										required
										onChange={(e) => {
											setForm({
												...form,
												userRole: e.target.value,
											});
										}}
									>
										<option value="Employee">Employee</option>
										<option value="admin">admin</option>
										<option value="Manager">Manager</option>
									</select>
								</div>
								<div className="form-group col-md-8">
									<input
										type="password"
										name="employee_password"
										placeholder="Your password"
										required
										onChange={(e) => {
											setForm({
												...form,
												employee_password: e.target.value,
											});
										}}
									/>
								</div>
								<div className="form-group col-md-12">
									<input //??
										id="form_botcheck"
										name="form_botcheck"
										className="form-control"
										type="hidden"
									/>
									<button
										className="theme-btn btn-style-one"
										type="submit"
										data-loading-text="Please wait..."
									>
										<span>Submit now</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddEmployee;
