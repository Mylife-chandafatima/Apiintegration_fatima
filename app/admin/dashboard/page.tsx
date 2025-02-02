import React from 'react';
import AdminDashboard from '../../components/AdminDashboard';

const App: React.FC = () => {
  return <AdminDashboard />;
};

export default App;



// import { useUser, UserButton } from "@clerk/nextjs";

// export default function AdminDashboard() {
//   const { isLoaded, isSignedIn } = useUser();

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   if (!isSignedIn) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-xl text-red-500">You must be logged in to access the dashboard.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
//         <UserButton />
//         <p>Only logged-in admins can access this page.</p>
//       </div>
//     </div>
//   );
// }
