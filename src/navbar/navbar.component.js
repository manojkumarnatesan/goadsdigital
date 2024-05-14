import React, { useState } from "react";
import "./navbar.style.css";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bs-info-bg-subtle opacity-50">
      <div class="dropdown" className="container-fluid">
        <Link className="navbar-brand" to="/">
          Go Ads Digital
        </Link>
        <button
          id="dropbtn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="DigitalMarketing">
                Digital Marketing
              </Link>

              <ul
                className="dropdown-menu dropdown-content"
                aria-labelledby="navbarDropdown"
              >
                <li key="seo">
                  <Link
                    className="dropdown-item"
                    to="/SearchEngineOptimization"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li key="gmb">
                  <Link className="dropdown-item" to="/GoogleMyBusinessRanking">
                    Google My Business Ranking
                  </Link>
                </li>
                <li key="onpage">
                  <Link className="dropdown-item" to="/OnPageSEO">
                    OnPage SEO
                  </Link>
                </li>
                <li key="offpage">
                  <Link className="dropdown-item" to="/OffPageSEO">
                    OffPage SEO
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="webDevelopment"
              >
                Web Development
              </Link>

              <ul
                className="dropdown-menu dropdown-content"
                aria-labelledby="navbarDropdown"
              >
                <li key="ecommerce">
                  <Link className="dropdown-item" to="Ecommerce">
                    E-Commerce Website
                  </Link>
                </li>
                <li key="business">
                  <Link className="dropdown-item" to="BusinessWebsite">
                    Business Website
                  </Link>
                </li>
                <li key="seo-optimized">
                  <Link className="dropdown-item" to="SeoWebsite">
                    SEO Optimized Website
                  </Link>
                </li>
                <li key="static">
                  <Link className="dropdown-item" to="StaticWebsite">
                    Static Website
                  </Link>
                </li>
                <li key="dynamic">
                  <Link className="dropdown-item" to="DynamicWebsite">
                    Dynamic Website
                  </Link>
                </li>
                <li key="testimonial">
                  <Link className="dropdown-item" to="/TestimonialWebsite">
                    Testimonial Website
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="webDevelopment"
              >
                Graphic Designing
              </Link>

              <ul
                className="dropdown-menu dropdown-content"
                aria-labelledby="navbarDropdown"
              >
                <li key="ecommerce">
                  <Link className="dropdown-item" to="UIUXDesign">
                    UI/UX Design
                  </Link>
                </li>
                <li key="business">
                  <Link className="dropdown-item" to="BusinessWebsite">
                    Business Card Design
                  </Link>
                </li>
                <li key="seo-optimized">
                  <Link className="dropdown-item" to="SeoWebsite">
                    ID Card Design
                  </Link>
                </li>
                <li key="static">
                  <Link className="dropdown-item" to="StaticWebsite">
                    Poster Design
                  </Link>
                </li>
                <li key="dynamic">
                  <Link className="dropdown-item" to="DynamicWebsite">
                    Brouchere Design
                  </Link>
                </li>
               
              </ul>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="webDevelopment"
              >
                Web Development
              </Link>
              <ul
                className="dropdown-menu dropdown-content"
                aria-labelledby="navbarDropdown"
              >
                <li key="ecommerce">
                  <Link className="dropdown-item" to="Ecommerce">
                    E-Commerce Website
                  </Link>
                </li>
                <li key="ecommerce">
                  <Link className="dropdown-item" to="Ecommerce">
                    E-Commerce Website
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <Link className="nav-link" to="aboutUs">
            AboutUs
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <Link className="nav-link " to="contact">
            ContactUs
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
