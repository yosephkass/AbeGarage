import React, { useEffect, useState } from "react";
import './employee.css'
import Admin from "../../../components/Admin/AdminMenu/Admin";
import AdminTable from "../../../components/tables/AdminTable";
import axios from "../../../../util/axios";


function createData(Active, firstname, lastName, Email, Phone,AddedDate,Role,edit) {
	return { Active, firstname, lastName, Email, Phone ,AddedDate,Role,edit};
 }



function EmployeeList() {

	const [employees,setEmployees] = useState([]);



	useEffect(()=>{
		const fetchData = async ()=>{
			const response =  await axios.get('api/all-employee');
			if(response.data.success){
				setEmployees(response.data.data);
			}

		}
		fetchData();



	},[]);

//  console.log(employees);
	return (
		<>
			<div className="">
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
							<h1>Employee list</h1>
							<AdminTable post={employees} className=''/>
					</div>
				</div>
			</div>
			</div>
		
		</>
	);
}

export default EmployeeList;
