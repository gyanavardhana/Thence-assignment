import React, { useState } from "react";
import "./Question.css";
import Shadeimage from "../../../assets/Union.png";
import Plusimage from "../../../assets/plus.svg";
import Minusimage from "../../../assets/minus.svg";
import questionsData from "../../../data/Questionsdata";


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img src={Minusimage} alt="minusimage" className="plus-logo"></img>
          ) : (
            <img src={Plusimage} alt="plusimage" className="plus-logo"></img>
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      <div className="line"></div>
    </div>
  );
};

const Questions = () => {
  return (
    <div className="question-container">
      <div className="question-heading-box">
        <div className="question-heading">
          <div className="question-heading1 covered-by-your-grace-regular">
            What's on your mind
          </div>
          <div className="question-heading2">Ask Questions</div>
        </div>
        <div className="shade-symbol">
          <img src={Shadeimage} alt="shade image"></img>
        </div>
      </div>
      <div className="questions">
        <div className="question-box">
          {questionsData.map((question, index) => (
            <Accordion key={index} title={question.title} content={question.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
