
import React from "react";
import Admin from "../../components/Admin/AdminMenu/Admin";
import AdminDashbord from "./adminDashbord/AdminDashbord";

function AdminDashbordPage() {
	return (
		<>
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side ">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side custom-background">
						<AdminDashbord />
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminDashbordPage;