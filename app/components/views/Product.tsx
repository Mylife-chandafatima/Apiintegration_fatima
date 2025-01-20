import React from 'react';

const Products: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
      <p>Here you can view, add, edit, and delete products.</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600">
        Add Product
      </button>
    </div>
  );
};

export default Products;
