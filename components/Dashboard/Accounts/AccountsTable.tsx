import React from "react";
import { accounts } from "../dummyData";

type Props = {};

const AccountsTable = (props: Props) => {
  // Dummy data
  const accountsTally = accounts;

  return (
    <div className="w-full h-full overflow-auto">
      <table className="table table-lg text-xs table-pin-rows">
      {/* head */}
      <thead>
        <tr className="text-xs">
          <th>Code</th>
          <th>Acc. Name</th>
          <th>Type</th>
          <th>Balance</th>
          <th>+/-</th>
        </tr>
      </thead>
      <tbody>
        {/* rows */}
        {accountsTally.map((accounts, index) => (
          <tr key={index} className="text-xs hover">
            <td className="text-xs font-bold">{accounts.accCode}</td>
            <td className="text-xs font-bold">{accounts.account}</td>
            <td className="text-xs">{accounts.type}</td>
            <td className="text-xs font-bold">{accounts.currBalance}</td>
            <td className="text-xs">+ 500,000</td>
          </tr>
        ))}
      </tbody>
      {/* foot */}
    </table>
      </div>
    
  );
};

export default AccountsTable;
