import React, { useState } from "react";
import AllTallyTable from "./AllTallyTable";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { useCRUDContext } from "@/context/CRUDContext";

const Tally = () => {
  const {
    isCreating,
    isDeleting,
    isEditing,
    setCreating,
    setDeleting,
    setEditing,
  } = useCRUDContext();

  const handleToggleCreateMode = () => {
    setCreating(!isCreating);
    if (isCreating) {
      setEditing(false);
      setDeleting(false);
    }
  };

  const handleToggleEditMode = () => {
    setEditing(!isEditing);
    if (isEditing) {
      setCreating(false);
      setDeleting(false);
    }
  };

  const handleToggleDeleteMode = () => {
    setDeleting(!isDeleting);
    if (isDeleting) {
      setCreating(false);
      setEditing(false);
    }
  };

  return (
    <div className="card w-full max-h-full h-full bg-base-100 shadow-xl">
      <div className="card-body flex flex-col justify-start items-start h-full w-full gap-8 p-5 md:p-8">
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="card-title">Tallies</h2>
          <div className="flex flex-row items-center justify-center gap-4">
            {isCreating ? (
              <>
                <button
                  className="btn btn-sm btn-primary text-xs"
                  onClick={handleToggleCreateMode}
                >
                  <IoMdAddCircleOutline className="text-xl" /> Add
                </button>
                <button
                  className="btn btn-sm btn-secondary text-xs"
                  onClick={handleToggleCreateMode}
                >
                  <IoMdAddCircleOutline className="text-xl" /> Cancel
                </button>
              </>
            ) : !isEditing && !isDeleting && (
              <button
                className="btn btn-sm btn-primary text-xs"
                onClick={handleToggleCreateMode}
              >
                <IoMdAddCircleOutline className="text-xl" /> Create
              </button>
            )}
            {isEditing ? (
              <button
                className="btn btn-sm btn-accent text-xs"
                onClick={handleToggleEditMode}
              >
                <CiEdit className="text-xl" /> Save
              </button>
            ) : !isCreating && !isDeleting && (
              <button
                className="btn btn-sm btn-accent text-xs"
                onClick={handleToggleEditMode}
              >
                <CiEdit className="text-xl" /> Update
              </button>
            )}
            {isDeleting ? (
              <>
              <button
                className="btn btn-sm btn-secondary text-xs"
                onClick={handleToggleDeleteMode}
              >
                <FaDeleteLeft className="text-xl" /> Confirm
              </button>
              <button
                className="btn btn-sm btn-primary text-xs"
                onClick={handleToggleDeleteMode}
              >
                <FaDeleteLeft className="text-xl" /> Go back
              </button>
              </>
            ) : !isCreating && !isEditing && (
              <button
                className="btn btn-sm btn-secondary text-xs"
                onClick={handleToggleDeleteMode}
              >
                <FaDeleteLeft className="text-xl" /> Delete
              </button>
            )}
            <ul className="menu menu-horizontal bg-base-200 rounded-box">
              <li>
                <a
                  className="tooltip flex flex-row font-bold text-xs"
                  data-tip="All Transactions"
                >
                  <GrMoney className="text-info text-xl font-bold" />
                  Transactions
                </a>
              </li>
              <div className="divider divider-base divider-horizontal mx-0"></div>
              <li>
                <a className="tooltip" data-tip="All Income">
                  <GiReceiveMoney className="text-primary text-xl font-bold" />
                </a>
              </li>
              <li>
                <a className="tooltip" data-tip="All Expenses">
                  <GiPayMoney className="text-secondary text-xl font-bold" />
                </a>
              </li>
              <li>
                <a className="tooltip" data-tip="All Transfers">
                  <FaMoneyBillTransfer className="text-accent text-xl font-bold" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <AllTallyTable />
      </div>
    </div>
  );
};

export default Tally;
