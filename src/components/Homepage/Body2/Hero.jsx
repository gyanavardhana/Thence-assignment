import React from "react";
import "./Hero.css";
import Leftarrow from "../../../assets/leftarrow.svg";
import Sparkle from "../../../assets/sparkle.svg";
import Rocket from "../../../assets/rocket.svg";
import Heroimage from "../../../assets/Heroimage.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="firstblock">
          <img src={Heroimage} alt="hero image" className="heroimage" />
          <Left />
          <LeftBottom />
          <Bottom />
        </div>
        <div className="secondblock">
          <Herotext />
          <Load />
          <Explore />
        </div>
      </div>
    </>
  );
};

const Herotext = () => {
  return (
    <>
      <p className="herotext">
        Enhance fortune 50 company’s insights teams research capabilities
      </p>
    </>
  );
};

const Load = () => {
  return (
    <div className="load">
      <div className="dot1"></div>
      <div className="dot2"></div>
      <div className="dot3"></div>
    </div>
  );
};

const Explore = () => {
  return (
    <button className="explore-button">
      <div className="twotext">
        <p>Explore more</p>
        <img src={Leftarrow} alt="left arrow" className="leftarrow" />
      </div>
    </button>
  );
};

const Bottom = () => {
  return (
    <div className="bottomtext">
      <div className="uptext">
        <p className="dolar">$0.5</p>
        <p className="dolartext">MILLION</p>
      </div>
      <p className="bttext">
        Reduced client expenses by saving on hiring and employee costs.
      </p>
    </div>
  );
};

const Left = () => {
  return (
    <div className="lefttext">
      <div className="leftuptext">
        <img src={Sparkle} alt="sparkle" className="sparkle" />
        <p className="percent">40%</p>
      </div>
      <p className="bttext">
        Achieved reduction in project execution time by optimising team
        availability
      </p>
    </div>
  );
};

const LeftBottom = () => {
  return (
    <div className="leftbottom">
      <img src={Rocket} alt="Rocket image" className="rocket" />
      <div className="leftbottomtext">
        <p className="time">10 DAYS</p>
        <p className="staff">Staff Deployment</p>
      </div>
    </div>
  );
};

export default Hero;
