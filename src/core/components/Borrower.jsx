import React, { useState } from "react";
import Tabs from "../components/Tabs";
import BorrowerTable from "../components/BorrowerTable";

const Borrower = () => {
  const [activeTab, setActiveTab] = useState("Wage Earner");

  return (
    <div className="borrower-page">
      <h2>Borrower Details</h2>
      <Tabs tabs={["Wage Earner", "Self Employed", "Document History"]} activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === "Wage Earner" && <BorrowerTable />}
      {activeTab === "Self Employed" && <div>Self Employed Details</div>}
      {activeTab === "Document History" && <div>Document History Content</div>}
    </div>
  );
};

export default Borrower;
