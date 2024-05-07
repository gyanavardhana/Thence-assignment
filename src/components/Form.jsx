import React, { useState } from "react";
import "./FormStyles.css";
import { Navigate, useNavigate } from "react-router-dom";
import BrunelLogo from "../assets/Brunel.svg";
import CloseLogo from "../assets/Closeicon.svg";
import ErrorLogo from "../assets/Error.svg";
import validateEmail from "../utils/emailValidator";

const Header = () => {
  return (
    <div className="header-container">
      <img src={BrunelLogo} alt="Brunel Logo" className="logo-left" />
      <div className="spacer"></div>
      <img src={CloseLogo} alt="Close Icon" className="logo-right" />
    </div>
  );
};

const ErrorMessage = ({ error }) => {
  return (
    <div className="error-container flex items-center">
      <img src={ErrorLogo} alt="Error Logo" className="error-logo" />
      <p style={{ color: "#FF0808"}}>{error}</p>
    </div>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateEmail(email);
    setEmailError(error);
    if (!error) {
      setSubmitted(true);
      navigate("/success");
    } else {
      setSubmitted(false);
    }
  };

  return (
    <>
      <Header />
      <div className="Container">
      <div className="form-container">
        <div className="heading-container">
          <h3 className="registration-heading covered-by-your-grace-regular">
            Registration Form
          </h3>
          <h1 className="form-heading ">Start your success Journey here!</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            className="input-field"
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="Enter your Email"
            className="input-field"
            value={email}
            onChange={handleEmailChange}
          />
          {!submitted && emailError && <ErrorMessage error={emailError} />}
          </div>
          
          
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Form;
