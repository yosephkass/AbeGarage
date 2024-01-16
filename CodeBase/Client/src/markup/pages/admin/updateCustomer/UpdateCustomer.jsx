import React, { useEffect, useState } from "react";
import axios from "../../../../util/axios";
import formvali from "../../../../util/validation";
import { useNavigate } from "react-router-dom";

function UpdateCustomer(props) {
	const navigator = useNavigate();
	const [form, setForm] = useState({
		customer_id: props.data.customer_id, // this is just for a test
		customer_first_name: props.data.firstname,
		customer_last_name: props.data.lastName,
		customer_phone_number: props.data.Phone,
		active_customer_status: props.data.Active,
	});


	const [errors, setErrors] = useState({});


	// Function to update the customer in the form state
	const updateCustomer = (updatedData) => {
		setForm((prevForm) => ({
			...prevForm,
			...updatedData,
		}));
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		form.active_customer_status = form.active_customer_status ? 1 : 0;
		const isValid = formvali.validateForm3(form);
		

		// if (!isValid.isValid) {
		// 	setErrors(isValid.errors);
		// 	console.log(isValid.errors);
		// 	console.log("checking");
		// } else {
			try {
				const response = await axios.put(
					`/api/customer`,
					form
				);
					console.log(response);
				if (response.data && response.data.success) {
					alert(response.data.message);
					// console.log(response.data);
					// Clear the form fields after successful update
					updateCustomer({
						customer_id: "",
						customer_first_name: "",
						customer_last_name: "",
						customer_phone_number: "",
						active_customer_status: 1,
					});
				}
			} catch (error) {
				alert(error.response.data.message);
			}
		// }
	};



	return (
		<>
			<div>
				<div className="form-column col-lg-7">
					<div className="inner-column">
						<div className="contact-form sec-title style-two">
							<br />
							<h2>Edit:</h2>
							<br />
							<p className="font-weight-bold">Customer email:</p>
							<form onSubmit={handleSubmit} id="contact-form">
								<div className="row clearfix">
									<div className="form-group col-md-12">
										<input
											type="text"
											name="customer_id"
											placeholder="customer id"
											required
											
											disabled
											value={form.customer_id}
											onChange={(e) =>
												setForm({
													...form,
													customer_id: e.target.value,
												})
											}
										/>
										{errors.customer_id && (
											<p className="error-message">{errors.customer_id}</p>
										)}
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="customer_first_name"
											placeholder="customer First Name"
											required
											value={form.customer_first_name}
											onChange={(e) =>
												setForm({
													...form,
													customer_first_name: e.target.value,
												})
											}
										/>
										{errors.customer_first_name && (
											<p className="error-message">
												{errors.customer_first_name}
											</p>
										)}
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="customer_last_name"
											placeholder="customer last Name"
											required
											value={form.customer_last_name}
											onChange={(e) =>
												setForm({
													...form,
													customer_last_name: e.target.value,
												})
											}
										/>
										{errors.customer_last_name && (
											<p className="error-message">
												{errors.customer_last_name}
											</p>
										)}
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="customer_phone"
											placeholder="customer phone"
											required
											value={form.customer_phone_number}
											onChange={(e) =>
												setForm({
													...form,
													customer_phone_number: e.target.value,
												})
											}
										/>
										{errors.customer_phone_number && (
											<p className="error-message">{errors.customer_phone_number}</p>
										)}
									</div>
									<div className="form-group col-md-12">
										<label>
											<input
												type="checkbox"
												name="is_active"
												checked={form.active_customer_status}
												onChange={(e) =>
													setForm({
														...form,
														active_customer_status: e.target.checked,
													})
												}
											/>
											Is active customer
										</label>
									</div>
									<div className="form-group col-md-12">
										<button
											className="theme-btn btn-style-one"
											type="submit"
											data-loading-text="Please wait..."
										>
											<span>UPDATE</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


export default UpdateCustomer;
