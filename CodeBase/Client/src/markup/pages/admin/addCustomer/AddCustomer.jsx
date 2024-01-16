import { useState, useEffect } from "react";
import formvali from "../../../../util/validation";
import axios from "../../../../util/axios";
import "./AddCustomer.css";
function AddCustomer() {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});

	const hadleSubmit = async (e) => {
		e.preventDefault();
		const isvalid = formvali.validateForm2(form);
		console.log(isvalid);
		if (!isvalid.isValid) {
			console.log(isvalid.errors);
		} else {
			try {
				const responce = await axios.post("/api/add-customer", form);
				if (responce.data.success) {
					e.target.value = "";
					alert(responce.data.message);
					window.location.reload();
				}
			} catch (error3) {
				alert(error3.response.data.message);
			}
		}
	};

	return (
		<div>
			<div className="form-column col-lg-7">
				<div className="inner-column">
					<div className="contact-form">
						<form onSubmit={hadleSubmit} id="contact-form">
							<div className="row clearfix">
								<div className="form-group col-md-12">
									<input
										type="email"
										name="customer_email"
										placeholder="Customer_Email"
										required
										onChange={(e) => {
											setForm({
												...form,
												customer_email: e.target.value,
											});
										}}
									/>
								</div>
								<div className="form-group col-md-12">
									<input
										type="text"
										name="customer_first_name"
										placeholder="customer First Name"
										required
										onChange={(e) => {
											setForm({
												...form,
												customer_first_name: e.target.value,
											});
										}}
									/>
								</div>
								<div className="form-group col-md-12">
									<input
										type="text"
										name="customer_last_name"
										placeholder="customer last  Name"
										required
										onChange={(e) => {
											setForm({
												...form,
												customer_last_name: e.target.value,
											});
										}}
									/>
								</div>
								<div className="form-group col-md-12">
									<input
										type="text"
										name="customer_phone"
										placeholder="customer phone"
										required
										onChange={(e) => {
											setForm({
												...form,
												customer_phone: e.target.value,
											});
										}}
									/>
								</div>

								<div className="form-group col-md-12">
									<button
										className="theme-btn btn-style-one"
										type="submit"
										data-loading-text="Please wait..."
									>
										<span>Add Customer</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddCustomer;
