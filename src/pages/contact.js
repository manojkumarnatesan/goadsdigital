import React from "react";
import "../pages/digital/digitalMarketing.css";

function Contact() {
  return (
    <div>
      <section id="contact" class="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p className="text-center">
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <iframe
                title="Google Map"
                className="w-100"
                style={{ height: "270px", border: "0" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15654.332047847174!2d78.1740327!3d11.2184565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf4914c7b907%3A0x4bb587e26ce3321e!2sGo%20ads%20digital%20marketing!5e0!3m2!1sen!2sin!4v1715539788349!5m2!1sen!2sin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div class="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>
                    No 200A, Thangam towers, swarana bhairavar finance near,
                    Thuraiyur Rd, Namakkal, Tamil Nadu 637001
                  </p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>support@goadsdigitalmarketing.info</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91-87787-90506</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                {/* <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
                <div className="text-center">
                  {" "}
                  <div className="btn btn-primary btn-sm rounded-3">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
