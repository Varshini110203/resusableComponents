// import { useState } from "react";
// import "./App.css";
// import TextBox from "./Components/TextBox.jsx";
// import Button from "./Components/Button.jsx";
// import Dropdown from "./Components/Dropdown.jsx";
// import Table from "./Components/Table.jsx";

// function App() {

//   return <div className="App">Component Library Demo</div>;

  // return (
  //   <>
  //     <TextBox
  //       name="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //       placeholder="Enter your email"
  //     />

  //     <Dropdown
  //       name="fruits"
  //       value={selectedFruit}
  //       onChange={(e) => setSelectedFruit(e.target.value)}
  //       options={options}
  //     />

  //     <Table columns={columns} data={data} />

  //     <Button
  //       text="Submit"
  //       type="button"
  //       onClick={handleSubmit}
  //       className="primary-btn"
  //     />
  //   </>
  // );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from "../src/core/components/Header";
import Sidebar from "../src/core/components/SideBar";

// Pages
import Dashboard from "../src/features/Pages/Dashboard";
import Loans from "../src/features/Pages/Loans";
import Borrower from "../src/features/Pages/Borrower";
import BankStatement from "../src/features/Pages/BankStatement";
import RealEstateOwned from "../src/features/Pages/RealEstateOwned";
import Summary from "../src/features/Pages/Summary";

// Styles
import "../src/core/styles/layout.css";
import "../src/core/styles/theme.css";

/**
 * Main App Component
 * Static header + sidebar + dynamic routed content area
 */
const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Static Header */}
        <Header />

        {/* Sidebar + Page Content */}
        <div className="main-layout">
          <Sidebar />
          <div className="content-area">
            <Routes>
              {/* Default Route */}
              <Route path="/" element={<Navigate to="/dashboard" />} />

              {/* Page Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/borrower/:id" element={<Borrower />} />
              <Route path="/bank-statement" element={<BankStatement />} />
              <Route path="/real-estate-owned" element={<RealEstateOwned />} />
              <Route path="/summary" element={<Summary />} />

              {/* 404 Fallback */}
              <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
