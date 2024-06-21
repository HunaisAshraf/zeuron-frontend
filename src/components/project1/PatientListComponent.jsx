import React from "react";
import "../../App.css";
import PatientFilter from "./PatientFilter";
import { TbMessage } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { LuGlasses } from "react-icons/lu";
import { FaFont } from "react-icons/fa";

const PatientListComponent = () => {
  return (
    <div className="patient-list">
      <div className="patient-header">
        <h1>Patients</h1>
        <div className="patient-menu">
          <div className="toggle">
            <label className="toggle-button">
              <input type="checkbox" id="toggle" />
              <span className="toggle-slider"></span>
            </label>
            <p>Dark Mode</p>
          </div>
          <div className="patient-menu-item">
            <LuGlasses /> <span>Increase Contrast</span>
          </div>
          <div className="patient-menu-item">
            <FaFont /> <span>Font Size</span>
            <input type="range" />
          </div>
        </div>
      </div>
      <div className="patient-body">
        <PatientFilter />

        <div className="patient-details">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="patient-card">
                <div className="patient-name">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                  <div className="">
                    <p>Carl Driffith</p>
                    <p>30 Years</p>
                  </div>
                </div>
                <div className="btns">
                  <div className="case-btn ">
                    <BsPerson /> Case History
                  </div>
                  <div className="btn">
                    <span>
                      <TbMessage />
                    </span>
                  </div>
                  <div className="btn">
                    <span>
                      <IoMdCall />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PatientListComponent;
