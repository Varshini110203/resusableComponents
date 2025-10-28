import React from "react";
import { useTheme } from "../hooks/useTheme.jsx";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 px-5 py-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 relative">
      <div className="text-xl font-semibold text-gray-800 dark:text-white">LoanDNA</div>
      <div className="flex gap-4 items-center">
        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
          FAQ
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
          Contact
        </a>
        <button
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;

