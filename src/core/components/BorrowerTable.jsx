import React from "react";

const BorrowerTable = () => {
  const data = [
    { id: 1, name: "John Doe", income: "$75,000", status: "Active" },
    { id: 2, name: "Jane Smith", income: "$85,000", status: "Active" },
    { id: 3, name: "Bob Johnson", income: "$65,000", status: "Pending" },
  ];

  return (
    <div className="mt-6">
      <table className="w-full border-collapse shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
              Income
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 transition-colors border-b border-gray-200"
            >
              <td className="px-4 py-3 text-gray-800">{row.name}</td>
              <td className="px-4 py-3 text-gray-600">{row.income}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    row.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowerTable;