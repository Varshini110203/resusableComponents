import React from "react";

const Tabs = ({ tabs, activeTab, onChange }) => (
  <div className="tabs">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`tab-btn ${tab === activeTab ? "active" : ""}`}
        onClick={() => onChange(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs;
