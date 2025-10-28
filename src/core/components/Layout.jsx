import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;