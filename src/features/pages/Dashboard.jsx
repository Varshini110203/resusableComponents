import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Dashboard</h2>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
          Welcome to the LoanDNA Dashboard
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Select a borrower or loan to view details.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;