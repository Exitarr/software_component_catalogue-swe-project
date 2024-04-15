import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


export default function DataTable() {

const columns = [
  { field: 'userName', headerName: 'User-Name', width: 200 },
  { field: 'Name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'role', headerName: 'Role', width: 200 },
];

const initialRows = [
  { id: 1, userName: 'Jon', Name: 'Snow', email: 'johnsnow@dev', role: 'user' },
  { id: 2, userName: 'Arya', Name: 'Stark', email: 'aryastark@winterfell.com', role: 'user' },
  { id: 3, userName: 'Tyrion', Name: 'Lannister', email: 'tyrion@casterlyrock.com', role: 'user' },
  { id: 4, userName: 'Daenerys', Name: 'Targaryen', email: 'daenerys@dragonstone.com', role: 'user' },
  { id: 5, userName: 'Sansa', Name: 'Stark', email: 'sansa@winterfell.com', role: 'user' },
  { id: 6, userName: 'Cersei', Name: 'Lannister', email: 'cersei@casterlyrock.com', role: 'user' },
  { id: 7, userName: 'Jaime', Name: 'Lannister', email: 'jaime@casterlyrock.com', role: 'user' },
  { id: 8, userName: 'Bran', Name: 'Stark', email: 'bran@winterfell.com', role: 'user' },
  { id: 9, userName: 'Theon', Name: 'Greyjoy', email: 'theon@pyke.com', role: 'user' },
  { id: 10, userName: 'Jorah', Name: 'Mormont', email: 'jorah@bearisland.com', role: 'user' },
  { id: 11, userName: 'Samwell', Name: 'Tarly', email: 'samwell@hornhill.com', role: 'user' }
];


  const [rows, setRows] = useState(initialRows);
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const handleDelete = () => {
    const updatedRows = rows.filter(row => !selectedRowIds.includes(row.id));
    console.log('Selected Row Ids:', selectedRowIds);
    setRows(updatedRows);
    setSelectedRowIds([]);
  };


  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectedRowIds(newRowSelectionModel);
          console.log('Selected Row Ids:', selectedRowIds);
        }}
      />
      <Button onClick={handleDelete}>
        <DeleteIcon />
      </Button>
      <Button><VerifiedUserIcon /></Button>
    </div>
  );
}
