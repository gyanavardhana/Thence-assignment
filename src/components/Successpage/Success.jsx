import React from "react";
import BrunelLogo from "../../assets/Brunel.svg";
import TickLogo from "../../assets/Tick.svg";
import "./Success.css";
import useRedirectTimer from "../../hooks/Redirecttimer";


const Header = () => {
  return (
    <div className="header-container">
      <img src={BrunelLogo} alt="Brunel Logo" className="logo-left" />
      <div className="spacer"></div>
    </div>
  );
};

const Footer = () => {
  const countdown = useRedirectTimer("/", 5);
  return (
    <div className="redirect-container">
      <p className="redirect-message">
        Redirecting you to Homepage in{" "}
        <span className="redirect-timer">{countdown} Seconds</span>
      </p>
    </div>
  );
};

const Success = () => {

  


  return (
    <div className="second-container">
      <Header />
      <div className="success-container">
        <img src={TickLogo} alt="Tick Logo" className="tick-logo" />
        <h3 className="success-header covered-by-your-grace-regular">
          Success Submitted
        </h3>
        <h1 className="success-heading">Congratulations</h1>
        <p className="success-message">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Success;
