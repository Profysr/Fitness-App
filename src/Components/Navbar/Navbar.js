import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logoImage" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            padding: "0.5rem",
            background: "var(--appColor)",
            width: "2.4rem",
            height: "2.4rem",
            position: "fixed",
            right: "1rem",
            zIndex: 99,
          }}
        >
          <img
            src={bars}
            alt="bars"
            onClick={() => setMenuOpened(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ) : (
        <ul className="navLinks">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="hero"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="features"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
