import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const borrowers = ["Borrower1", "Borrower2", "Borrower3"];

  const navLinkClasses = ({ isActive }) =>
    `block px-5 py-3 transition-all duration-200 border-l-3 ${
      isActive
        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-500 font-semibold"
        : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  const sublinkClasses = ({ isActive }) =>
    `block px-5 py-2.5 pl-12 transition-all duration-200 ${
      isActive
        ? "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold"
        : "text-gray-600 dark:text-gray-400 hover:bg-gray-150 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
    }`;

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col overflow-y-auto">
      <nav className="flex flex-col py-2">
        <NavLink to="/dashboard" className={navLinkClasses}>
          Dashboard
        </NavLink>
        <NavLink to="/loans" className={navLinkClasses}>
          Loans
        </NavLink>
        
        <div className="px-5 py-3 text-gray-500 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mt-2 border-b border-gray-200 dark:border-gray-700">
          Borrower
        </div>
        
        <div className="bg-white dark:bg-gray-700 mx-2 my-2 rounded border border-gray-200 dark:border-gray-600 overflow-hidden">
          {borrowers.map((b, i) => (
            <NavLink
              key={i}
              to={`/borrower/${b.toLowerCase()}`}
              className={sublinkClasses}
            >
              {b}
            </NavLink>
          ))}
        </div>
        
        <NavLink to="/real-estate-owned" className={navLinkClasses}>
          Real Estate Owned
        </NavLink>
        <NavLink to="/summary" className={navLinkClasses}>
          Summary
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;