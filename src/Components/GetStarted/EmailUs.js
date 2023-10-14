import React from "react";
import "./EmailPage.css";

const EmailUs = () => {
  return (
    <div className="emailUs">
      <div className="leftE sectionHeading">
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="rightE">
        <form action="#">
          <input type="email" name="name" placeholder="Email" />
          <input type="submit" value="Join Now" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default EmailUs;
