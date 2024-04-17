import * as React from 'react';
import { useState , useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import { useQuery , useMutation } from '@apollo/client';
import { queries } from '../../Queries';
import { mutations } from '../../Mutations';


export default function DataTable() {

const columns = [
  { field: 'userName', headerName: 'User-Name', width: 200 },
  { field: 'Name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'role', headerName: 'Role', width: 200 },
];



  const [rows, setRows] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const { loading, error, data } = useQuery(queries.GET_ALL_USERS);

  useEffect(() => {
    if (data) {
      setRows(data.getAllUsers);
    }
  }, [data]);
  
  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;


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