import React, { useState } from "react";
import "./plans.css";
import { plansData } from "./plansData";
import listIcon from "./../../assets/whiteTick.png";
import rightArrow from "./../../assets/rightArrow.png";

const PlansSection = () => {
  const [hovered, setHovered] = useState(2);

  return (
    <div className="plans" id="plans">
      <div className="blur blur-p blur-pl"></div>
      <div className="blur blur-p blur-pr"></div>
      <div className="sectionHeading">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      <div className="cards-container">
        {plansData.map((plan, index) => {
          return (
            // <div className="plan-card" key={index}>
            <div
              onMouseOver={() => {
                setHovered(plan.id);
              }}
              onMouseOut={() => {
                setHovered(2);
              }}
              // className="plan-card"
              className={hovered === plan.id ? "plan-card active" : "plan-card"}
              key={index}
            >
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="plan-feature">
                {plan.features.map((feature, index) => {
                  return (
                    <div className="feature" key={index}>
                      <img src={listIcon} alt="" />
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div className="see-more">
                {" "}
                <span>See More Benefits</span>
                <img src={rightArrow} alt="" />
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlansSection;
