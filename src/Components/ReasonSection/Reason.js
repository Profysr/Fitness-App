import React from "react";
import "./reasonSection.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import nb from "../../assets/nb.png";
import tick from "../../assets/tick.png";

const Reason = () => {
  return (
    <div className="reasonWrapper" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <div className="sectionHeading">
          <span>Some Reasons</span>
          <span className="stroke-text">Why Choose Us</span>
        </div>
        <ul>
          <li>
            <img src={tick} alt="tickImage" />{" "}
            <span>OVER 140+ EXPERT COACHES</span>
          </li>

          <li>
            <img src={tick} alt="tickImage" />{" "}
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </li>

          <li>
            <img src={tick} alt="tickImage" />{" "}
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </li>
          <li>
            <img src={tick} alt="tickImage" />
            <span>RELIABLE PARTNERS</span>
          </li>
        </ul>
        <div className="partenerSection">
          <span>our parteners</span>
          <div className="brandIcons">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
