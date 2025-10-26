import React, { useState } from "react";
import Tabs from "../components/Tabs";
import BorrowerTable from "../components/BorrowerTable";
import "../styles/layout.css";

const Borrower = () => {
  const [activeTab, setActiveTab] = useState("Wage Earner");

  return (
    <div className="page-container">
      <h2>Borrower Details</h2>

      <div className="borrower-tabs">
        <Tabs
          tabs={["Wage Earner", "Self Employed", "Document History"]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      <div className="tab-content">
        {activeTab === "Wage Earner" && <BorrowerTable />}
        {activeTab === "Self Employed" && <p>Self-Employed details go here.</p>}
        {activeTab === "Document History" && <p>Document history details go here.</p>}
      </div>
    </div>
  );
};

export default Borrower;
