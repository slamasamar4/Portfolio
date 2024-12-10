import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";


const QualificationComponent = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification" className="qualification section">
      <h2 className="section__title">Qualification</h2>
      {/*<span className="section__subtitle">My Journey</span> */}

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="qualification__icon" />
            Education
          </div>
          <div
            className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor in Software engineering </h3>
                <span className="qualification__subtitle">Horizon school of digital technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationComponent;