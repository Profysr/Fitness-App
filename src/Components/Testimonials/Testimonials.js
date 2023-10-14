import React, { useState } from "react";
import "./testimonials.css";
import { testimonial } from "./testimonialsData";
import left from "../../assets/leftArrow.png";
import right from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(2);
  const tLength = testimonial.length;

  return (
    <div className="testimonials" id="testimonials">
      <div className="t-left">
        <div className="tHeading">
          <span>Testimonials</span>
          <span className="stroke-text">What they</span>
          <span className="sectionHeading">say about us</span>
        </div>
        <div className="tDesc">{testimonial[selected].review}</div>
        <div>
          <span className="tUser">{testimonial[selected].name}</span> -{" "}
          {testimonial[selected].status}
        </div>
      </div>
      <div className="t-right">
        <div></div>
        <div></div>
        <img src={testimonial[selected].image} alt="" />
        <div className="arrow">
          <img
            src={left}
            alt=""
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((curr) => curr - 1);
            }}
          />
          <img
            src={right}
            alt=""
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((curr) => curr + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
