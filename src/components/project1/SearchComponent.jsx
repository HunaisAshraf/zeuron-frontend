import React from "react";
import { GrRefresh } from "react-icons/gr";
import { VscSettings } from "react-icons/vsc";
import { FaRegBell } from "react-icons/fa";

const SearchComponent = () => {
  return (
    <div className="search-component">
      <input type="text" placeholder="Search patients or doctors" />
      <select name="" id="">
        <option value="">DashBoard properties</option>
      </select>
      <div className="icons">
        <p>
          <GrRefresh />
        </p>
        <p>
          <VscSettings />
        </p>
        <p className="bell-icon">
          <FaRegBell />
        </p>
        <img
          src="https://i.pinimg.com/736x/00/f8/e6/00f8e62a60bba40c1cbc109b2a8c559a.jpg"
          alt="profile-img"
          className="profile-img"
        />
        <div className="name">
          <h5>Joshuva Jose</h5>
          <h6>Physiotherapist</h6>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
