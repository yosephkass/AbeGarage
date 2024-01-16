import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./assets/template_assets/css/color.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/style.css";
import "./assets/styles/custom.css";

//Importing pages
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import About from "./markup/pages/About";
import Contact from "./markup/pages/Contact";
import Services from "./markup/pages/Services";
import Fo4 from "./markup/pages/404";
// admin page
import AddEmployee from "./markup/pages/admin/AddEmployee/AddEmployee";
import AddCustomer from "./markup/pages/admin/addCustomer/AddCustomer";
import EmployeeList from "./markup/pages/admin/employee/employeeList";
//Importing Components
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import AddEmployeePage from "./markup/pages/admin/AddEmployeePage";
import AddCustomerPage from "./markup/pages/admin/AddCustomerPage";
import AdminDashbordPage from "./markup/pages/admin/AdminDashbordPage";
import UpdateCustomerPage from "./markup/pages/admin/updateCustomer/UpdateCustomerPage";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Login />} path="/Login" />
				<Route
					path="/about"
					element={
						<>
							<About />
						</>
					}
				/>
				<Route
					path="/contact"
					element={
						<>
							<Contact />
						</>
					}
				/>
				<Route
					path="/services"
					element={
						<>
							<Services />
						</>
					}
				/>

				{/* ******admin pages****** */}
				<Route
					path="/admin/add-employee"
					element={
						<>
							<AddEmployeePage />
						</>
					}
				/>

				<Route
					path="/admin/add-customer"
					element={
						<>
							<AddCustomerPage />
						</>
					}
				/>
				<Route
					path="/admin/update-single-customer"
					element={
						<>
							<UpdateCustomerPage />
						</>
					}
				/>

				<Route
					path="/admin/add-customer"
					element={
						<>
							<AddCustomerPage />
						</>
					}
				/>
				<Route
					path="/admin/dashbord"
					element={
						<>
							<AdminDashbordPage />
						</>
					}
				/>
				<Route
					path="/admin/employee-list"
					element={
						<>
							<EmployeeList />
						</>
					}
				/>
				<Route
					path="/*"
					element={
						<>
							<Fo4 />
						</>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
