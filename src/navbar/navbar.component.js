import React from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary dopacity-50">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Go Ads Digital
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="DigitalMarketing"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Digital Marketing
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/SearchEngineOptimization">
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/GoogleMyBusinessRanking">
                    Google My Business Ranking
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/OnPageSEO">
                    OnPage SEO
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/OffPageSEO">
                    OffPage SEO
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="DigitalMarketing"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Web Development
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="Ecommerce">
                    E-Commerce Website
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="BusinessWebsite">
                    Business Website
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="SeoWebsite">
                    SEO Optimized Website
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="StaticWebsite">
                    Static Website
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="DynamicWebsite">
                    Dynamic Website
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/TestimonialWebsite">
                    Testimonial Website
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
