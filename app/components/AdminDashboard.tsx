"use client"

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './views/Product';
import Orders from './views/Order';
import Users from './views/User';
import Categories from './views/Categories';

const AdminDashboard: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="bg-white shadow p-4 flex justify-between">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <nav>
            <Link to="/products" className="text-blue-500 mx-2 hover:underline">
              Products
            </Link>
            <Link to="/orders" className="text-blue-500 mx-2 hover:underline">
              Orders
            </Link>
            <Link to="/users" className="text-blue-500 mx-2 hover:underline">
              Users
            </Link>
            <Link to="/categories" className="text-blue-500 mx-2 hover:underline">
              Categories
            </Link>
          </nav>
        </header>

        <main className="mt-6">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>

        <footer className="mt-6 text-center text-gray-500">
          <p>&copy; 2025 Admin Dashboard. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default AdminDashboard;
