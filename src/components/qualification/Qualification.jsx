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

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="qualification__icon" />
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* -------------------- EDUCATION -------------------- */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Left item */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master in Big Data & Data Science</h3>
                <span className="qualification__subtitle">Horizon School of Digital Technologies</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar /> 2024 – Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            {/* Right item */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachelor in Software Engineering</h3>
                <span className="qualification__subtitle">Horizon School of Digital Technologies</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar /> 2022 – 2025
                </div>
              </div>
            </div>
          </div>

          {/* -------------------- EXPERIENCE -------------------- */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Left item */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer — React.js</h3>
                <span className="qualification__subtitle">ENVAST (Internship)</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar /> 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            {/* Right item */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Fullstack Projects</h3>
                <span className="qualification__subtitle">React • Node.js • REST APIs</span>
                <div className="qualification__calendar">
                 {/*<HiOutlineCalendar />*/} 
                </div>
              </div>
            </div>

            {/* Left item */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Unified SSO for Education </h3>
                <span className="qualification__subtitle"> React • Docker • Kubernetes • CI/CD • GitHub Actions</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar /> February 2025 – July 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationComponent;
