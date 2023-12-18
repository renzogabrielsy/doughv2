import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaPesoSign } from "react-icons/fa6";
import Stat from "./Stat";
type Props = {};

const Statistics = (props: Props) => {
  return (
    <div className="card w-[50%] h-full bg-base-100 shadow-xl">
      <div className="card-body w-full p-5 py-7">
        <div className="flex flex-row justify-start items-center gap-2">
          <h2 className="card-title">Statistics </h2>
          <button className="btn btn-xs btn-circle btn-info">
            <IoMdInformationCircleOutline className="text-lg font-bold" />
          </button>
        </div>
        <div className="flex flex-row w-full h-full justify-center items-center">
          <div className="flex flex-col justify-center items-center h-full w-[49%]">
            <div className="text-lg font-bold text-base-content mb-0 lg:mb-2">
              Current Month
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col w-[50%]">
                <Stat
                  valueColor="text-primary"
                  icon={<GiReceiveMoney className="text-2xl font-bold" />}
                  title="Gross Income"
                  value="350K"
                />
                <Stat
                  valueColor="text-success"
                  icon={<FaMoneyBillTrendUp className="text-2xl font-bold" />}
                  title="Net Total"
                  value="200k"
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <Stat
                  valueColor="text-secondary"
                  icon={<GiReceiveMoney className="text-2xl font-bold" />}
                  title="Gross Expense"
                  value="150k"
                />
                <div className="stats bg-accent text-accent-content rounded-md h-full shadow-md">
                  <div className="stat px-3 py-1 flex flex-col justify-center h-full gap-0">
                    <div className="stat-title text-xs text-accent-content text-opacity-60">
                      Saved
                    </div>
                    <div className="stat-value text-sm flex flex-row items-center">
                      <FaPesoSign />
                      100k
                    </div>
                  </div>
                  <div className="stat px-3 py-1 flex flex-col justify-center h-full gap-0">
                    <div className="stat-title text-xs text-accent-content text-opacity-60">
                      Invested
                    </div>
                    <div className="stat-value text-sm flex flex-row items-center">
                      <FaPesoSign />
                      100k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex flex-col justify-center items-center h-full w-[49%]">
            <div className="text-lg font-bold text-base-content mb-2">
              Monthly Average
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col w-[50%]">
                <Stat
                  valueColor="text-primary"
                  icon={<GiReceiveMoney className="text-2xl font-bold" />}
                  title="Gross Income"
                  value="25.6K"
                />
                <Stat
                  valueColor="text-success"
                  icon={<FaMoneyBillTrendUp className="text-2xl font-bold" />}
                  title="Net Total"
                  value="25.6K"
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <Stat
                  valueColor="text-secondary"
                  icon={<GiReceiveMoney className="text-2xl font-bold" />}
                  title="Gross Expense"
                  value="25.6K"
                />
                <div className="stats bg-accent text-accent-content rounded-md h-full shadow-md">
                  <div className="stat px-3 py-1 flex flex-col justify-center h-full gap-0">
                    <div className="stat-title text-xs text-accent-content text-opacity-60 mb-0">
                      Saved
                    </div>
                    <div className="stat-value text-sm flex flex-row items-center">
                      <FaPesoSign />
                      100k
                    </div>
                  </div>
                  <div className="stat px-3 py-1 flex flex-col justify-center h-full gap-0">
                    <div className="stat-title text-xs text-accent-content text-opacity-60">
                      Invested
                    </div>
                    <div className="stat-value text-sm flex flex-row items-center">
                      <FaPesoSign />
                      100k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
