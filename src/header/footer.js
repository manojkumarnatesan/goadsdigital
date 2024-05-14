import React from "react";
import instagramIcon from "./../assets/instagram.png";
import facebookIcon from "./../assets/facebook.png";
import twitterIcon from "./../assets/twitter.png";
import linkedinIcon from "./../assets/linkedin.png";


function Footer() {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Go Ads Digital Marketing</h3>
            <p>
            <strong>Address:</strong> <br/>
              No 200A, Thangam towers, Thurayur Road ,<br />
              Swarana Bhiravar Finance Near , Namakkal
              <br />
              Tamilnadu, india, 637001 <br />
              <strong>Phone:</strong> +97 87787-90506
              <br />
              <strong>Email:</strong> support@goadsdigitalmarketing.info <br/>

            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4>Useful Links</h4>
            <ul className="list-unstyled">
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="aboutUs">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4>Our Services</h4>
            <ul className="list-unstyled">
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="webDevelopment">Web Development</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="digitalMarketing">Marketing</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <button className="btn btn-danger" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-md-flex justify-content-between align-items-center">
          <div className="text-center text-md-start mb-3 mb-md-0">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Go Ads Digital Marketing</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by{" "}
              <a href="https://bootstrapmade.com/">Go Ads Digital Marketing</a>
            </div>
          </div>
          <div className="social-links text-center text-md-end">
          <a href="#" className="me-3">
            <img src={twitterIcon} alt="Twitter" className="social-icon img-fluid" style={{ width: '1.25rem', height: '1.25rem' }} />
          </a>
          <a href="#" className="me-3">
            <img src={facebookIcon} alt="Facebook" className="social-icon img-fluid" style={{ width: '1.25rem', height: '1.25rem' }} />
          </a>
          <a href="#" className="me-3">
            <img src={instagramIcon} alt="Instagram" className="social-icon img-fluid" style={{ width: '1.25rem', height: '1.25rem' }} />
          </a>
          <a href="#">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon img-fluid" style={{ width: '1.25rem', height: '1.25rem' }} />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
