import React from "react";
import AccountsTable from "./AccountsTable";
import { BsDatabaseAdd } from "react-icons/bs";

type Props = {};

function Accounts({}: Props) {
  return (
    <div className="card w-[50%] max-h-full h-full bg-base-100 shadow-xl p-0">
      <div className="card-body h-full flex flex-col justify-start w-full p-5 lg:p-8">
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="card-title">Accounts</h2>
          <button className="btn btn-primary btn-sm w-24">
            <BsDatabaseAdd /> Add
          </button>
        </div>
          <AccountsTable />
      </div>
    </div>
  );
}

export default Accounts;
