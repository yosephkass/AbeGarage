import React from "react";
import Admin from "../../../components/Admin/AdminMenu/Admin";
import UpdateCustomer from "./UpdateCustomer";

function UpdateCustomerPage() {
	return (
		<>
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
						<UpdateCustomer />
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateCustomerPage;
