import React from 'react';
import Orders from "../../order/page"

const rders: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded ">
      <h2 className="text-xl font-semibold mb-4">Manage Orders</h2>
      <p>Here you can view and manage customer orders.</p>
      <div className='border-2 border-amber-500'>
      <Orders/>
      </div>
    </div>
  );
};

export default rders;
