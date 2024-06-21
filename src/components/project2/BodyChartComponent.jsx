import React from "react";
import { FaHeart, FaBrain } from "react-icons/fa";
import { GiKidneys, GiLiver, GiStomach, GiLungs } from "react-icons/gi";

const parts = [
  {
    name: "Heart",
    percent: "80%",
    details: "5% higher than last month",
    icon: <FaHeart />,
  },
  {
    name: "Kidney",
    percent: "70%",
    details: "5% higher than last month",
    icon: <GiKidneys />,
  },
  {
    name: "Liver",
    percent: "85%",
    details: "5% higher than last month",
    icon: <GiLiver />,
  },
  {
    name: "Stomach",
    percent: "90%",
    details: "5% higher than last month",
    icon: <GiStomach />,
  },
  {
    name: "Lung",
    percent: "76%",
    details: "5% higher than last month",
    icon: <GiLungs />,
  },
  {
    name: "Brain",
    percent: "82%",
    details: "5% higher than last month",
    icon: <FaBrain />,
  },
];

const BodyChartComponent = () => {
  return (
    <div className="body-chart">
      {parts.map((part) => (
        <div className="part-card" key={part.name}>
          <div className="icon">
            <p className="logo">{part.icon}</p>
            <div>
              <p>{part.name}</p>
              <p>{part.percent}</p>
            </div>
          </div>
          <p>{part.details}</p>
        </div>
      ))}
    </div>
  );
};

export default BodyChartComponent;
