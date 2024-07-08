import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

// Remove the unused import if not needed
// import { GridRowSelectionModel } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Book Title', flex: 1 },
  { field: 'author', headerName: 'Author', flex: 1 },
  { field: 'year', headerName: 'Year', flex: 1 },
  { field: 'isbn', headerName: 'Isbn', flex: 1 }
];

function DataTable() {
  const [open, setOpen] = useState(false);
  const { contactData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = useState<string[]>([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = () => {
    if (selectionModel[0]) {
      server_calls.delete(selectionModel[0]);
      getData();
      setTimeout(() => { window.location.reload(); }, 500);
    }
  };

  return (
    <>
      <Modal id={selectionModel} open={open} onClose={handleClose} />
      <div className='flex flex-row'>
        <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Add New Book</Button>
        <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Update</Button>
        <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Delete</Button>
      </div>
      <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"} style={{ height: 400, width: '100%' }}>
        <h2 className='p-3 bg-slate-300 my-2 rounded'>Digital Library Inventory</h2>
        <DataGrid
          rows={contactData}
          columns={columns}
          pageSizeOptions={[5]}
          checkboxSelection
          onRowSelectionModelChange={(item) => setSelectionModel(item as string[])}
        />
      </div>
    </>
  );
}

export default DataTable;
