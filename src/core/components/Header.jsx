import React from "react";
import { useTheme } from "c:/Varshini/resusableComponents/src/hooks/useTheme.js"
import "../styles/layout.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="logo">LoanDNA</div>
      <div className="header-actions">
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
