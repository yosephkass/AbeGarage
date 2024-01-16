import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function createData(Active, firstname, lastName, Email, Phone,AddedDate,customer_id,edit) {
  return { Active, firstname, lastName, Email, Phone ,AddedDate,customer_id,edit};
}


export default function AdminTableCopy(props) {


  //console.log(props.post);

  const rows = props.post.map((single) => {
    return createData(single.active , single.firstName, single.lastName, single.email, single.phoneNumber ,single.addedDate,single.customer_id )

  });

  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Active</TableCell>
            <TableCell align="right">firstname</TableCell>
            <TableCell align="right">lastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Added date</TableCell>
            <TableCell align="right">Customer Id</TableCell>
            <TableCell align="right">edit / delete</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
    
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Active}
              </TableCell>
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.Phone}</TableCell>
              <TableCell align="right">{row.AddedDate}</TableCell>
              <TableCell align="right">{row.Role}</TableCell>
              <TableCell align="right">{row.edit}</TableCell>
              <TableCell align="right">
             
                  <span className=''>
            
                  <Link to="/admin/update-single-customer" state={{data: row}}> 
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