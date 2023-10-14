import React, { useState } from "react";
import "./FeatureCards.css";
import { programsData } from "./cardData";

const FeatureCards = () => {
  const [arrow, setArrow] = useState(0);
  return (
    <div className="programs" id="features">
      <div className="sectionHeading">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>Programs to shape you</span>
      </div>
      <div className="cardsContainer">
        {programsData.map((program, index) => {
          return (
            <div
              className="card"
              key={index}
              onMouseOver={() => {
                setArrow(program.id);
              }}
              onMouseOut={() => {
                setArrow(0);
              }}
            >
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                {/* Join Now <i className="fa-solid fa-arrow-right-long"></i> */}
                Join Now{" "}
                <i
                  style={{ transition: "all 0.5s linear" }}
                  className={
                    arrow !== program.id
                      ? "fa-solid fa-arrow-right"
                      : "fa-solid fa-arrow-right-long"
                  }
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
