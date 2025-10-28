import React, { useState } from "react";
import Tabs from "../../core/components/Tabs";
import BorrowerTable from "../../core/components/BorrowerTable";

const Borrower = () => {
  const [activeTab, setActiveTab] = useState("Wage Earner");

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Borrower Details</h2>

      <div className="mb-6">
        <Tabs
          tabs={["Wage Earner", "Self Employed", "Document History"]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      <div className="tab-content">
        {activeTab === "Wage Earner" && <BorrowerTable />}
        {activeTab === "Self Employed" && (
          <p className="text-gray-600">Self-Employed details go here.</p>
        )}
        {activeTab === "Document History" && (
          <p className="text-gray-600">Document history details go here.</p>
        )}
      </div>
    </div>
  );
};

export default Borrower;