import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="search" />
      <p>
        <IoSettingsOutline />
      </p>
      <p>
        <FaRegBell />
      </p>
    </div>
  );
};

export default Header;
