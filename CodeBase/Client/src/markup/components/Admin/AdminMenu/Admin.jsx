import React from "react";
import { Link } from "react-router-dom";

function Admin() {
	return (
		<div className="bg-container">
			<div className="admin-container">
				<h4>
					<a href="/admin">ADMIN MENU</a>
				</h4>
				<div className="list-container">
					<ul className="admin-list">
						<li>
							<Link to="/admin/dashbord">Dashbord</Link>
						</li>
						<li>
							<Link to="/admin/orders-list">Orders</Link>
						</li>
						<li>
							<Link to="/new-order">New order</Link>
						</li>
						<li>
							<Link to="/admin/add-employee">Add employee</Link>
						</li>
						<li>
							<Link to="/admin/employee-list">Employee</Link>
						</li>
						<li>
							<Link to="/admin/add-customer">Add customer</Link>
						</li>
						<li>
							<Link to="">Customers</Link>
						</li>
						<li>
							<Link to="/servies">Servies</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Admin;
