import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

import Admin from '../../../components/AdminMenu/Admin'
import axios from "../../../../util/axios";

function UpdateEmployeePage() {
   const location = useLocation();
   const navigator = useNavigate();
   const { data } = location.state || {};
	console.log(data);


   const [form,setForm] = useState({
      active_employee: 1,
      employee_id: data.employee_id,
      employee_email: data.Email,
      employee_phone: data.Phone,
      userRole: data.Role,
      employee_first_name: data.firstname,
      employee_last_name: data.lastname  
    });
  
 
    console.log(data.Email);
 
	const [errors, setErrors] = useState({});

	const hadleSubmit = async (e) => {
		e.preventDefault();
		console.log(form);
      try {
         const response = await axios.put('/api/employee',form);
         console.log(response.data)
         alert(response.data.message);
         if(response.data.success){
            navigator('/admin/employee-list');
         }

      } catch (error) {
         console.log(error)
      }

	};



  return (
   	<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
                     <div className="inner-column">
                        <div className="contact-form">
                           <form onSubmit={hadleSubmit} id="contact-form">
                              <div className="row clearfix">
                              <div className="form-group col-md-12">
										<input
											type="text"
											name="employee_id"
											placeholder="employee id"
											required
											
											disabled
											value={form.employee_id}
											onChange={(e) =>
												setForm({
													...form,
													employee_id: e.target.value,
												})
											}
										/>
										{errors.employee_id && (
											<p className="error-message">{errors.employee_id}</p>
										)}
									</div>
                                 <div className="form-group col-md-12">
                                    <input
                                       type="email"
                                       name="employee_email"
                                       placeholder="Employee Email"
                                       required
                                       value={form.employee_email}
                                       onChange={(e) => {
                                          setForm({
                                             ...form,
                                             employee_email: e.target.value,
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
                                       value={form.employee_first_name}
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
                                       value={form.employee_last_name}
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
                                       value={form.employee_phone}
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
                                       value={form.userRole}
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
                                 <div className="form-group col-md-12">
                                    <input
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
            </div>
      </div>
  )
}

export default UpdateEmployeePage