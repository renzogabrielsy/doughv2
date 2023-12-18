import React from "react";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FaPesoSign } from "react-icons/fa6";
import { tally } from "../dummyData";
import { useCRUDContext } from "@/context/CRUDContext";
import TallyCreateRow from "./TallyCreateRow";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const AllTallyTable = (props: Props) => {
  // Dummy data
  const tallyData = tally;
  const { isCreating, isDeleting, isEditing } = useCRUDContext();

  return (
    <div className="overflow-y-auto w-full h-full">
      <table className="table table-md table-pin-rows">
        <thead>
          <tr className="bg-base-200 shadow-md h-14">
            {isDeleting && (
              <th>
                <label className="flex justify-center items-center">
                  {isDeleting && (
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent checkbox-xs"
                    />
                  )}
                </label>
              </th>
            )}
            <th className="border-r-2 border-base-300 w-[12.5%]">Date</th>
            <th className="border-r-2 border-base-300 w-[21.5%]">Name</th>
            <th className="border-r-2 border-base-300 w-[11.5%]">
              Transaction
            </th>
            <th className="border-r-2 border-base-300 w-[11.5%]">Category</th>
            <th className="border-r-2 border-base-300 w-[11.5%]">
              <label className="flex flex-row justify-between items-center gap-2">
                Account
                <GiPayMoney className="text-lg font-bold text-secondary" />
              </label>
            </th>
            <th className="border-r-2 border-base-300 w-[11.5%]">
              <label className="flex flex-row justify-between items-center gap-2">
                Account
                <GiReceiveMoney className="text-lg font-bold text-primary" />
              </label>
            </th>
            <th className="w-[20%]">
              <span className="flex flex-row justify-between items-center gap-4">
                <FaPesoSign className="h-[12px] w-[12px]" />
                Amount
              </span>
            </th>
          </tr>
          <AnimatePresence>{isCreating && <TallyCreateRow />}</AnimatePresence>
        </thead>
        <tbody>
          {tallyData.map((tally, index) => (
            <tr key={index} className="hover">
              {isDeleting && (
                <th>
                  <label className="flex justify-center items-center">
                    {isDeleting && (
                      <input
                        type="checkbox"
                        className="checkbox checkbox-accent checkbox-xs"
                      />
                    )}
                  </label>
                </th>
              )}
              <td className="border-r-2 border-base-300 text-sm">
                {tally.date}
              </td>
              <td className="border-r-2 border-base-300 text-sm">
                {tally.name}
              </td>
              <td className="border-r-2 border-base-300 text-sm">
                {tally.transaction}
              </td>
              <td className="border-r-2 border-base-300 text-sm">
                {tally.category}
              </td>
              <td className="border-r-2 border-base-300 text-sm">
                {tally.accountFrom}
              </td>
              <td className="border-r-2 border-base-300 text-sm">
                {tally.accountTo}
              </td>
              <td className="border-r-2 border-base-300 text-sm">
                <span className="flex flex-row justify-between items-center gap-4">
                  <FaPesoSign className="h-[12px] w-[12px]" />
                  {tally.amount}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTallyTable;
