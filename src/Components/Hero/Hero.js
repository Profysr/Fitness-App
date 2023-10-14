import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import Heart from "../../assets/heart.png";
import HeroImage from "../../assets/hero_image.png";
import HeroBack from "../../assets/hero_image_back.png";
import CalorieImage from "../../assets/calories.png";
const Hero = () => {
  return (
    <>
      <div className="wrapper" id="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Navbar />
          {/* The best Add  */}
          <div className="the-best-ad">
            <div></div>
            <span>The best fitness club in the town</span>
          </div>
          {/* Hero Heading  */}
          <div className="sectionHeading">
            <div>
              <span className="stroke-text">Shape</span>
              <span>Your</span>
            </div>

            <div>
              <span>Ideal</span>
              <span className="stroke-text">Body</span>
            </div>
          </div>

          {/* <div> */}
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
            doloremque odio iure quasi tempora!
          </span>
          {/* </div> */}

          {/* feature section  */}
          <div className="features">
            <div>
              <span>
                <div>+ 140</div>
              </span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>
                <div>+ 978</div>
              </span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>
                <div>+ 50</div>
              </span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
          {/* buttons  */}
          <div className="btns-section">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
          {/* end of left-h div  */}
        </div>

        <div className="right-h">
          <button className="btn">Join Now</button>
          <div className="heart">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>
          {/* Hero Image  */}
          <img src={HeroImage} alt="" />

          <img src={HeroBack} alt="" />
          {/* Calories Burned Section  */}
          <div className="calorieSection">
            <img src={CalorieImage} alt="" />
            <div className="content">
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
