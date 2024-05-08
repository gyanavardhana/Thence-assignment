import BrunelLogo from "../../../assets/Brunel.svg";
import CloseLogo from "../../../assets/Closeicon.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const handlewrongclick = () => {
        navigate('/')
    };
    return (
      <div className="header-container">
        <img src={BrunelLogo} alt="Brunel Logo" className="logo-left" />
        <div className="spacer"></div>
        <img src={CloseLogo} alt="Close Icon" onClick={handlewrongclick} className="logo-right" />
      </div>
    );
  };

  export default Header;