import React from "react";

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

const PatientFilter = () => {
  return (
    <div className="patient-filter">
      <div className="">
        <div className="gender">
          <button>All</button>
          <button>Men</button>
          <button>Women</button>
          <button>New</button>
        </div>
      </div>
      <div className="alphabet-filter">
        {alphabets.map((alphabet) => (
          <span key={alphabet}>{alphabet}</span>
        ))}
      </div>
    </div>
  );
};

export default PatientFilter;
