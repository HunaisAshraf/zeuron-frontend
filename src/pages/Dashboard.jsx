import React, { useEffect, useState } from "react";
import SideBar from "../components/project2/SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import SearchComponent from "../components/project1/SearchComponent";
import PatientListComponent from "../components/project1/PatientListComponent";
import Header from "../components/project2/Header";
import BodyChartComponent from "../components/project2/BodyChartComponent";
import ChartComponent from "../components/project2/ChartComponent";

const Dashboard = () => {
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
    <div className="main">
       {sidebar && <SideBar setSidebar={setSidebar} />}
      <div className="home-container">
        {!sidebar && (
          <div className="navbar">
            <div className="dashboard-logo">
              <span>
                <FaPlay />
              </span>
              <p>Dashboard</p>
            </div>
            <p>
              <GiHamburgerMenu onClick={() => setSidebar(true)} />
            </p>
          </div>
        )}
        <Header />
        <BodyChartComponent />
        <ChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
