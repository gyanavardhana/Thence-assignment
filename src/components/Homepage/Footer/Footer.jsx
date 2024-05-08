import './Footer.css';
import CopyrightLogo from "../../../assets/copyright.svg";

const Footer = () => {
    return (
      <div className="home-footer-container">
        <div className="alltexts">
          <div className="firsttext">
            <img
              src={CopyrightLogo}
              alt="copy right logo"
              className="copy-left"
            />
            <p className="copy-right">Talup 2023. All rights reserved</p>
          </div>
          <div className="secondtext">
            <p className="intext">Terms & Conditions</p>
            <p className="outtext">Privacy Policy</p>
          </div>
        </div>
      </div>
    );
  };


  export default Footer;