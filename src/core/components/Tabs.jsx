import React from "react";

const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="border-b border-gray-300 mb-6">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 font-medium text-sm transition-all duration-200 border-b-2 ${
              activeTab === tab
                ? "text-blue-600 border-blue-500 font-semibold"
                : "text-gray-600 border-transparent hover:text-blue-600 hover:bg-gray-50"
            }`}
            onClick={() => onChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;