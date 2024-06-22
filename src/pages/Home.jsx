import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import PatientListComponent from "../components/project1/PatientListComponent";
import SearchComponent from "../components/project1/SearchComponent";
import SideBar from "../components/project1/SideBar"
import logo from "../assets/image.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 668) {
        setSidebar(false);
      } else {
        setSidebar(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main ">
      {sidebar && <SideBar setSidebar={setSidebar} />}

      <div className="home-container">
        {!sidebar && (
          <div className="navbar">
            <img src={logo} alt="" height={50} />
            <p>
              <GiHamburgerMenu onClick={() => setSidebar(true)} />
            </p>
          </div>
        )}
        <SearchComponent />
        <PatientListComponent />
      </div>
    </div>
  );
};

export default Home;
