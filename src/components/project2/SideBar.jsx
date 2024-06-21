import React, { useEffect, useState } from "react";
import "../../App.css";
import { RxDashboard } from "react-icons/rx";
import { IoMailOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { GiHamburgerMenu, GiNetworkBars } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";

export const links = [
  {
    title: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    title: "Stastics",
    icon: <GiNetworkBars />,
  },
  {
    title: "Messages",
    icon: <IoMailOutline />,
  },
  {
    title: "Discover",
    icon: <FaRegCompass />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    title: "Settings",
    icon: <IoSettingsOutline />,
  },
];

const SideBar = ({ setSidebar }) => {
  const [button, setButton] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 668) {
        setButton(true);
      } else {
        setButton(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="sidebar sidebar-two">
      <div
        style={
          button
            ? {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }
            : {}
        }
      >
        <div className="dashboard-logo">
          <span>
            <FaPlay />
          </span>
          <p>Dashboard</p>
        </div>
        {button && (
          <p>
            <GiHamburgerMenu onClick={() => setSidebar(false)} />
          </p>
        )}
      </div>
      <div className="profile">
        <div className="profile-img"></div>
        <p>Girth Wiedenbauer</p>
        <span>My Account</span>
      </div>
      <div className="links">
        <ul>
          {links.map((link) => (
            <li key={link.title} className="link">
              <div>{link.icon}</div>
              <div>{link.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
