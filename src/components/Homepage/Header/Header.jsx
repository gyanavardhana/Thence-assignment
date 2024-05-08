import React from "react";
import BrunelLogo from "../../../assets/Brunel.svg";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleProjectsButtonClick = () => {
    
    navigate('/projects')
  };

  return (
    <>
      <div className="head-container">
        <img src={BrunelLogo} alt="Brunel Logo" className="logo-left" />
        <div className="spacer"></div>
        <div className="headerpart-container">
          <button className="projects-button button-base" onClick={handleProjectsButtonClick}>Get projects</button>
          <button className="onboard-button button-base">Onboard Talent</button>
        </div>
      </div>
    </>
  );
};

export default Header;
