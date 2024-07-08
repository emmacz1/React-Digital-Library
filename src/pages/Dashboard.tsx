import React from 'react';
import DataTable from '../components/DataTable';

function Dashboard() {
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-2xl font-bold mb-4">Digital Library Dashboard</h2>
      <DataTable />
    </div>
  );
}

export default Dashboard;

export {};
