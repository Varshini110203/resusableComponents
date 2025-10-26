import React from "react";

const BorrowerTable = () => {
  return (
    <div className="borrower-table">
      <button className="add-btn">+ Add Employer</button>
      <table>
        <thead>
          <tr>
            <th>Employer Name</th>
            <th>Date of Hire</th>
            <th>Active Employment Flag</th>
            <th>Employment Verified Thru Date</th>
            <th>Date of Termination</th>
            <th>Months Employed</th>
            <th>Total Monthly Income</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New Employer</td>
            <td>01-01-2022</td>
            <td><input type="checkbox" /></td>
            <td></td>
            <td></td>
            <td>0.00</td>
            <td>$0.00</td>
            <td>
              <button>✏️</button>
              <button>🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="comment-btn">Show Commentary</button>
    </div>
  );
};

export default BorrowerTable;
