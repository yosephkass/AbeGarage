import React from "react";
import Admin from "../../../components/Admin/AdminMenu/Admin";
import { useLocation } from 'react-router-dom';
import AdminTableCopy from "../../../components/tables/AdminTable copy";
import UpdateCustomer from "./UpdateCustomer";

function UpdateCustomerPage() {
	const location = useLocation();
	const { data } = location.state || {};
	console.log(data);

	return (
		<>
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
					<UpdateCustomer data={data} />
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateCustomerPage;