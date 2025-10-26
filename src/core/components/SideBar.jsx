import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/layout.css";

const Sidebar = () => {
  const borrowers = ["Borrower1", "Borrower2", "Borrower3"];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/loans">Loans</NavLink>
        
        <div className="sidebar-section">Borrower</div>
        <div className="borrower-sublinks">
          {borrowers.map((b, i) => (
            <NavLink key={i} to={`/borrower/${b.toLowerCase()}`} className="sublink">
              {b}
            </NavLink>
          ))}
        </div>
        
        <NavLink to="/real-estate-owned">Real Estate Owned</NavLink>
        <NavLink to="/summary">Summary</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;