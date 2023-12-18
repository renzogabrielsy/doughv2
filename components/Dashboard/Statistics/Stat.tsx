import React, { ReactNode } from "react";
import { FaPesoSign } from "react-icons/fa6";

type StatProps = {
  figureColor?: string;          // Optional color for the figure
  valueColor: string;            // Mandatory color for the value
  icon: ReactNode;               // Icon component
  title: string;                 // Title text
  value: string;                 // Value text
  children?: ReactNode;          // Optional additional children
};

const Stat: React.FC<StatProps> = ({ figureColor, valueColor, icon, title, value, children }) => {
  return (
    <div className="stat p-1 gap-1">
      <div className={`stat-figure ${figureColor || valueColor}`}>
        {icon}
      </div>
      <div className="stat-title text-xs">{title}</div>
      <div className={`stat-value ${valueColor} text-xl flex flex-row items-center gap-1 mr-5`}>
        <FaPesoSign /> {value}
        </div>
      {children}
    </div>
  );
};

export default Stat;
