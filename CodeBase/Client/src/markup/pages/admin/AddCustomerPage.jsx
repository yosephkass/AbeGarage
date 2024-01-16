import React from "react";
import Admin from "../../components/Admin/AdminMenu/Admin";
import AddCustomer from "../../pages/admin/addCustomer/AddCustomer";

function AddCustomerPage() {
	return (
		<>
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
						<AddCustomer />
					</div>
				</div>
			</div>
		</>
	);
}

export default AddCustomerPage;
