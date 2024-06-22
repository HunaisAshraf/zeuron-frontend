import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const PatientFilter = ({handleFilter,genderFilter}) => {
  return (
    <div className="patient-filter">
      <div className="gender-filter">
        <div className="gender">
          <button onClick={()=>genderFilter("all")}>All</button>
          <button onClick={()=>genderFilter("male")}>Men</button>
          <button onClick={()=>genderFilter("female")}>Women</button>
          <button onClick={()=>genderFilter("new")}>New</button>
        </div>
        <div className="onboard">
          <button>Onboard Patient</button>
          <p>
            <IoIosArrowBack /> This month <IoIosArrowForward />
          </p>
        </div>
      </div>
      <div className="alphabet-filter">
        {alphabets.map((alphabet) => (
          <span key={alphabet} onClick={()=>handleFilter(alphabet)}>{alphabet}</span>
        ))}
      </div>
    </div>
  );
};

export default PatientFilter;
