import React from "react";
import { motion } from "framer-motion";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FaPesoSign } from "react-icons/fa6";
import { useCRUDContext } from "@/context/CRUDContext";

type Props = {};

const TallyCreateRow = (props: Props) => {
  const { isCreating, isDeleting, isEditing } = useCRUDContext();

  const variants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1 },
  };

  return (
    // <tr className={`transition-opacity duration-500 ease-in-out transform translate-y-0 opacity-100 bg-primary font-normal`}>
    <motion.tr
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.15 }}
      className="bg-primary"
    >
      <th className="border-r-2 border-base-300 pl-[0.5em]">
        <input
          type="date"
          placeholder="Date"
          className="input input-outline rounded-md m-0 input-xs w-full p-0 bg-opacity-0"
        />
      </th>
      <th className="border-r-2 border-base-300">
        <input
          type="text"
          placeholder="Name"
          className="input input-ghost rounded-md px-0 input-xs w-full bg-opacity-0"
          style={{
            paddingLeft: "0px",
          }}
        />
      </th>
      <th className="border-r-2 border-base-300">
        <select
          className="select select-xs w-full rounded-md bg-opacity-0"
          style={{
            paddingLeft: "0px",
          }}
        >
          <option disabled selected>
            ---
          </option>
          <option>Income</option>
          <option>Expense</option>
          <option>Transfer</option>
        </select>
      </th>
      <th className="border-r-2 border-base-300">
        <select
          className="select select-xs w-full rounded-md bg-opacity-0"
          style={{
            paddingLeft: "0px",
          }}
        >
          <option disabled selected>
            ---
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </th>
      <th className="border-r-2 border-base-300">
        <span className="flex flex-row items-center justify-between gap-2">
          <select
            className="select select-xs w-full rounded-md bg-opacity-0"
            style={{
              paddingLeft: "0px",
            }}
          >
            <option disabled selected>
              ---
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <GiPayMoney className="text-lg font-bold text-primary-content" />
        </span>
      </th>
      <th className="border-r-2 border-base-300">
        <span className="flex flex-row items-center justify-between gap-2">
          <select
            className="select select-xs w-full rounded-md bg-opacity-0"
            style={{
              paddingLeft: "0px",
            }}
          >
            <option disabled selected>
              ---
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <GiReceiveMoney className="text-lg font-bold text-primary-content" />
        </span>
      </th>
      <th className="border-r-2 border-base-300 text-right">
        <span className="flex flex-row justify-between items-center gap-4">
          <FaPesoSign className="h-[12px] w-[12px]" />
          <input
            type="number"
            className="input input-ghost rounded-md m-0 input-xs w-full bg-opacity-0 text-right"
            style={{
              paddingRight: "0px",
            }}
          />
        </span>
      </th>
    </motion.tr>
  );
};

export default TallyCreateRow;
