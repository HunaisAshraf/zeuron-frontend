import React, { useEffect, useState } from "react";
import logo from "../../assets/image.png";
import "../../App.css";
import { FaMicrophone } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { GrSchedulePlay } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import { FaUserDoctor, FaRegMessage } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

export const links = [
  {
    title: "Dashboard",
    icon: <FaMicrophone />,
  },
  {
    title: "Appointments",
    icon: <GrSchedulePlay />,
  },
  {
    title: "Programs",
    icon: <LuClock />,
  },
  {
    title: "Patients",
    icon: <MdGroups />,
  },
  {
    title: "Doctors",
    icon: <FaUserDoctor />,
  },
  {
    title: "Messages",
    icon: <FaRegMessage />,
  },
  {
    title: "Growth",
    icon: <TbBrandTelegram />,
  },
  {
    title: "Finances",
    icon: <CiWallet />,
  },
];

const SideBar = ({setSidebar}) => {
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
    <div className="sidebar">
      <div
        style={{
          "display": "flex",
          "justifyContent": "space-between",
          "alignItems": "center",
        }}
      >
        <img src={logo} alt="" height={50} />
        {button && (
          <p>
            <GiHamburgerMenu onClick={() => setSidebar(false)} />
          </p>
        )}
      </div>
      <div className="help">
        <p className="help-icon">
          <i>
            <FaMicrophone />
          </i>
        </p>
        <p>Emergency Help</p>
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
