import React, { useEffect, useState } from 'react'
import AdminTableCopy from '../../../components/tables/AdminTable copy'

import axios from "../../../../util/axios";

const ListOfCustomer = () => {


   const [customer,setcustomer] = useState([]);



	useEffect(()=>{
		const fetchData = async ()=>{
			const response =  await axios.get('api/customer');
  
			if(response.data.success){
       // console.log(response.data.data);
				setcustomer(response.data.data);
			}

		}
		fetchData();



	},[]);



  return (
  <>
  
      <div className=" col-md-9 admin-right-side">
             <h1>Customer list</h1>
             <AdminTableCopy post={customer} className=''/>
      </div>
  
  </>
  )
}

export default ListOfCustomer