import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import moment from 'moment'

function createData(Active, firstname, lastname, Email, Phone,AddedDate,Role,employee_id) {
  return { Active, firstname, lastname, Email, Phone ,AddedDate,Role,employee_id};
}


export default function AdminTable(props) {

  const rows = props.post.map((single) => {
    return createData(single.active_employee, single.firstname, single.lastname, single.email, single.phone,single.added_date,single.company_role_name,single.employee_id)

  });


  // Assuming you have included the Moment.js library in your project
// You can include it using a script tag or an npm package.

function convertDateFormat(inputTime) {
  const parsedTime = moment(inputTime);
  // Format the parsed time in the desired format
  const formattedTime = parsedTime.format('DD MMM YYYY');
  return formattedTime;
}





  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Active</TableCell>
            <TableCell align="right">firstname</TableCell>
            <TableCell align="right">lastname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Added date</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">edit / delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Active}
              </TableCell>
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.Phone}</TableCell>
              <TableCell align="right">{convertDateFormat(row.AddedDate)}</TableCell>
              <TableCell align="right">{row.Role}</TableCell>
              <TableCell align="right">
             
             <span className=''>
       
             <Link to="/admin/update-single-employee" state={{data: row}}> 
             <EditIcon />
              </Link>
               </span>
             <span className=''><DeleteIcon /></span>
         
         </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}