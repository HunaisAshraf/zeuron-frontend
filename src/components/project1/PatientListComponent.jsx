import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import PatientFilter from "./PatientFilter";
import { TbMessage } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { LuGlasses } from "react-icons/lu";
import { FaFont } from "react-icons/fa";
import ThemeContext from "../../context/ThemeContext";

const patient = [
  {
    name: "Alice Johnson",
    age: 28,
    gender: "female",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqW5lCXxflY_ZOsSs11cRIOoOwTTYHjy0_8A&s",
  },
  {
    name: "Bob Smith",
    age: 34,
    gender: "male",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
  },
  {
    name: "Charlie Brown",
    age: 22,
    gender: "male",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
  },
  {
    name: "David Williams",
    age: 45,
    gender: "male",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
  },
  {
    name: "Eva Green",
    age: 30,
    gender: "female",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqW5lCXxflY_ZOsSs11cRIOoOwTTYHjy0_8A&s",
  },
];

const PatientListComponent = () => {
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState([]);
  const {toggleTheme} = useContext(ThemeContext)

  const handleFilter = (letter) => {
    const filteredPatient = patient.filter((p) => p.name.startsWith(letter));
    setFilter(filteredPatient);
  };
  const genderFilter = (gender) => {
    if (gender === "all" || gender === "new") {
      setFilter(patient);
      return;
    }
    console.log(gender);
    const filteredPatient = patient.filter((p) => p.gender === gender);
    setFilter(filteredPatient);
  };

  useEffect(() => {
    setFilter(patient);
  }, []);

  return (
    <div className="patient-list">
      <div className="patient-header">
        <h1>Patients</h1>
        <div className="patient-menu">
          <div className="toggle">
            <label className="toggle-button">
              <input type="checkbox" id="toggle" onClick={toggleTheme} />
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
      <div className="patient-body dark">
        <PatientFilter
          handleFilter={handleFilter}
          genderFilter={genderFilter}
        />

        <div className="patient-details">
          {filter.map((patient, i) => (
            <div key={i} className="patient-card">
              <div className="patient-name">
                <img src={patient.image} alt="" />
                <div className="">
                  <p>{patient.name}</p>
                  <p>{patient.age} Years</p>
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
