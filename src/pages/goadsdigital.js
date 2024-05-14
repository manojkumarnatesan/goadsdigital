import React, { useState } from "react";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import settingicon from "../assets/settingicon.jpg";
import designicon from "../assets/designicon.jpg";
import icon1 from "../assets/icon1.jpg";
import webicon from "../assets/webicon.jpg";
import "./../pages/digital/goadsdigital.css";
import webdesign from "../assets/web design.jpg";
import digital1 from "../assets/digital.webp";
import Header from "../header/footer";
import Navbar from "../navbar/navbar.component";

function GoAdsDigital() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    message: "",
  };

  const [loginDetails, setLoginDetails] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginDetails);
    fetch("https://goadsdigital-92799-default-rtdb.firebaseio.com/user.json", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });
    setLoginDetails(initialState);
  }

  function handleSubmitlogin(event) {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div>
      <section id="custom" className="gallery section-padding bg-img-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 g-4">
              <div className="text-center">
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{ height: "100vh" }}
                >
                  <h2 className="font-weight-bold">
                    Go Ads Digital Marketing Agency In Namakkal
                  </h2>
                  <p className="text-justify">
                    Go Ads digital marketing agency in Namakkal is highly
                    recommended for its essential and effective services that
                    significantly enhance your business’s reach and awareness.
                    With our expertise, you can establish direct and
                    personalized communication with your target audience, making
                    it an invaluable opportunity. By leveraging various channels
                    and platforms, our digital marketing agency aids in the
                    growth of your online business, leading to increased sales
                    and profits.
                  </p>
                  <a
                    className="btn btn-danger btn-lg rounded-pill"
                    href="contact"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-5 float-end align-items-start mt-4 position-absolute bottom-0 end-0">
            <div className="card w-50 p-3">
              <h5>Select the Service</h5>
              <select
                className="form-select form-select-lg mb-1"
                aria-label="Large select example"
                name="service"
              >
                <option value="1">Digital Marketing</option>
                <option value="2">Search Engine Optimization</option>
                <option value="3">Web Development</option>
                <option value="4">Graphic Designing</option>
              </select>

              <form action="your-endpoint-here" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={handleSubmitlogin}
                    value={loginDetails.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleSubmitlogin}
                    value={loginDetails.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="mobile"
                    onChange={handleSubmitlogin}
                    value={loginDetails.mobile}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    onChange={handleSubmitlogin}
                    value={loginDetails.message}
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" class="gallery section-padding-g-4 ">
        <div className="container text-center">
          <h2 className="font-weight-bold">
            Exploring The Benefits Of A Digital Company In Namakkal
          </h2>

          <div className="row g-4">
            <div className="col-4 ">
              <div className="card border border-light-subtle">
                <img src={card1} className="card-img-top" alt="..." />
                <h3 className="text-center">
                  Increased Efficiency And Productivity
                </h3>
                <p className="text-center">
                  Go Ads Digital Company enhances efficiency and productivity
                  through its services. With their expertise, businesses can
                  streamline processes, leverage technology, and optimize
                  digital strategies, leading to improved performance and
                  success.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img src={card2} className="img-top" alt="..." />
                <h3 className="text-center">Customer Experience</h3>
                <p className="text-center">
                  Customer Experience by delivering personalized solutions,
                  prompt support, and exceptional service. We strive to exceed
                  expectations, foster long-term partnerships, and ensure client
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img src={card3} className="img-top" alt="..." />
                <h3 className="text-center">Increased Profit </h3>
                <p className="text-center">
                  90% of organizations that have completed Digital Company
                  transformation report increased profits. 80% say they have
                  increased their market share. 25% higher revenue growth than
                  competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="gallery" class="gallery section-padding">
        <div class="container text-center  text-bg-info">
          <div class="col-sm g-4 p-2">
            <h1 className="d-flex flex-column align-items-start justify-content-center font-weight-bold">
              Would You Like To Start A Project With Us?
            </h1>
            <br />
            <h4 className="text-start">We Assure A Best Services</h4>
          </div>
          <br />
          <div class="row">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end p-2">
              <button
                type="button"
                className="btn btn-danger  me-md-5 btn-lg rounded-pill"
              >
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="gallery" class="gallery section-padding ">
        <div className="container-fluid">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6 g-4">
                <div className="text-center">
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                  >
                    <h3>Services In</h3>
                    <h2>GoAdsDigital Company</h2>
                    <img
                      src={digital1}
                      className="img-bottom"
                      alt="..."
                      style={{ height: "300px", width: "300px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-6 col-md-3 g-3">
                    <div className="card w-100">
                      <img
                        src={icon1}
                        className="card-img-top"
                        alt="..."
                        width="100"
                        height="100"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Digital Marketing
                        </h5>
                        <p>
                          A Digital Marketing Company offers various services to
                          help businesses promote their products or services
                          online and improve their online presence, visibility,
                          and customer engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 g-3">
                    <div className="card w-100">
                      <img
                        src={webicon}
                        className="card-img-top"
                        alt="..."
                        width="100"
                        height="100"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          App and Software
                        </h5>
                        <p>
                          A Digital Company specializing in app and software
                          development offers innovative and customized solutions
                          to meet your business needs, leveraging cutting-edge
                          technology for optimal results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 g-3">
                    <div className="card w-100">
                      <img
                        src={settingicon}
                        className="card-img-top"
                        alt="..."
                        width="100"
                        height="100"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Web Development
                        </h5>
                        <p>
                          A Digital Company specializing in web development
                          provides expert services to create and enhance
                          websites, ensuring a seamless user experience and
                          effective online presence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 g-3">
                    <div className="card w-100">
                      <img
                        src={designicon}
                        className="card-img-top"
                        alt="..."
                        width="100"
                        height="100"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Graphic Designing
                        </h5>
                        <p>
                          Graphic Designing creates visually appealing and
                          engaging designs for various digital platforms,
                          helping businesses stand out and attract their target
                          audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section>
        <div class="container text-center">
          <div class="row">
            <div class="col-12 col-md-6 g-4">
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100vh" }}
              >
                <h2 className="font-weight-bold">Web Development</h2>
                <p className="text-justify">
                  Web Development Company that offers comprehensive solutions
                  for businesses. With expertise in Web Development, they create
                  customized websites tailored to meet client requirements. Go
                  Ads Digital Marketing ensures the use of cutting-edge
                  technologies, responsive design, and seamless user experience.
                  Their team of skilled professionals delivers high-quality,
                  visually appealing, and functional websites. Whether it’s an
                  e-commerce platform, corporate website, or web application, Go
                  Ads Digital Marketing is dedicated to providing innovative Web
                  Development Solutions that help businesses thrive in the
                  digital landscape.
                </p>
                <a
                  className="btn btn-danger btn-lg rounded-pill"
                  href="webDevelopment"
                >
                  Go To Web Development
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 g-4">
              <img src={webdesign} alt="..." width="450" height="550" />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="gallery" class="gallery section-padding-g-4 ">
        <div className="container text-center">
          <h2 className="font-weight-bold">
            Business With Our Digital Company Services In Namakkal
          </h2>

          <div className="row g-4">
            <div className="col-4 ">
              <div className="card border border-light-subtle">
                <img src={card1} className="card-img-top" alt="..." />
                <h3 className="text-center">Branding</h3>
                <p className="text-center">
                  Digital Company branding is essential for establishing a
                  unique and recognizable identity in the online space. It
                  involves creating a consistent visual and messaging strategy
                  to convey your brand's values and offerings, enhancing
                  customer engagement
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img src={card2} className="img-top " alt="..." />
                <h3 className="text-center">Strategic Planning</h3>
                <p className="text-center">
                  Digital Marketing strategic planning involves developing a
                  comprehensive roadmap to achieve business objectives,
                  incorporating digital marketing, technology, and innovation to
                  drive growth and competitive advantage.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img src={card3} className="img-top" alt="..." />
                <h3 className="text-center">Video Production</h3>
                <p className="text-center">
                  Digital Marketing video production combines the power of
                  visual storytelling with marketing strategies to create
                  engaging videos that promote products, services, or brands
                  across digital platforms effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section>
        <div class="container text-center">
          <div class="row">
            <div class="col-12 col-md-6 g-4">
              <img src={webdesign} alt="..." width="450" height="550" />
            </div>
            <div class="col-12 col-md-6 g-4">
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100vh" }}
              >
                <h2 className="font-weight-bold">Digital Marketing</h2>
                <p className="text-justify">
                  Go Ads Digital Marketing offers comprehensive digital
                  marketing services to help businesses establish a strong
                  online presence and drive growth. With a focus on innovation
                  and tailored strategies, their team of experts provides
                  result-oriented solutions in areas such as search engine
                  optimization (SEO), social media marketing, pay-per-click
                  (PPC) advertising, content marketing, and more. Go Ads Digital
                  Marketing leverages industry best practices and cutting-edge
                  techniques to maximize brand visibility, generate qualified
                  leads, and achieve measurable business goals. Trust them to
                  deliver effective digital marketing solutions that drive
                  success in the ever-evolving digital landscape.
                </p>
                <a
                  className="btn btn-danger btn-lg rounded-pill"
                  href="digitalMarketing"
                >
                  Go To Digital Marketing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section id="gallery" class="gallery section-padding-g-4 ">
        <div className="container text-center">
          <div className="row g-4">
            <div className="col-4 ">
              <div className="card border border-light-subtle">
                <img src={card1} className="card-img-top" alt="..." />
                <h3 className="text-center">Content Creation</h3>
                <p className="text-center">
                  Digital Company content creation is the process of producing
                  original and engaging material for various platforms. It
                  involves generating unique ideas, conducting research, and
                  crafting compelling content
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img src={card2} className="img-top" alt="..." />
                <h3 className="text-center">Database Marketing</h3>
                <p className="text-center">
                  Go Ads Digital Marketing specializes in database marketing
                  services. They help businesses effectively utilize their
                  customer databases to create targeted marketing campaigns and
                  drive growth.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img src={card3} className="img-top" alt="..." />
                <h3 className="text-center">SEO Strategy</h3>
                <p className="text-center">
                  A digital company's SEO strategy involves optimizing website
                  content, building quality backlinks, conducting keyword
                  research, and implementing on-page and off-page optimization
                  techniques to improve search engine rankings and drive organic
                  traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div class="container text-center">
          <div class="row">
            <div class="col-12 col-md-6 g-4">
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100vh" }}
              >
                <h2 className="font-weight-bold">Graphic Designing</h2>
                <p className="text-justify">
                  Go Ads Digital Marketing company for graphic designing
                  services. With their expertise and creativity, they deliver
                  innovative and visually appealing designs that captivate
                  audiences. Whether it’s logo design, branding, or marketing
                  collateral, Go Ads Digital Marketing Company provides unique
                  solutions tailored to meet your business needs. Their
                  commitment to quality and originality ensures that your
                  designs stand out from the competition. Partner with Go Ads
                  Digital Marketing for exceptional graphic designing services
                  that make a lasting impression.
                </p>
                <a
                  className="btn btn-danger btn-lg rounded-pill"
                  href="webDevelopment"
                >
                  Go To Graphic Designing
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 g-4">
              <img src={webdesign} alt="..." width="450" height="550" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="gallery" class="gallery section-padding">
        <div className="container text w-75 h-75 bs-body-bg">
          <div className="card  rounded-3" style={{ width: "75rem" }}>
            <div className="col-sm g-4 p-2">
              <h1 className="d-flex text-primary-emphasis flex-column align-items-start justify-content-center font-weight-bold">
                Would You Like To Start A Project With Us?
              </h1>
              <br />
              <h4 className="text-start">We Assure Best Services</h4>
            </div>
            <br />
            <div className="row">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
                <button
                  type="button"
                  className="btn btn-primary me-md-5 btn-lg rounded-3"
                >
                  GET QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div class="container text-center">
          <div class="row">
            <div class="col-12 col-md-6 g-4">
              <img src={webdesign} alt="..." width="450" height="550" />
            </div>
            <div class="col-12 col-md-6 g-4">
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100vh" }}
              >
                <h2 className="font-weight-bold">App & Software</h2>
                <p className="text-wrap">
                  Go Ads Digital Marketing is a leading company specializing in
                  app and software development. With a team of skilled
                  professionals, they deliver innovative and customized
                  solutions to meet the unique needs of businesses. Their
                  expertise spans across various platforms, including mobile
                  apps and software applications. Digital Company is committed
                  to delivering high-quality, user-friendly, and scalable
                  solutions that drive business growth and enhance the digital
                  presence of their clients. With their dedication to excellence
                  and cutting-edge technology, they are the go-to choice for
                  businesses seeking top-notch app and software development
                  services.
                </p>
                <a
                  className="btn btn-danger btn-lg rounded-pill"
                  href="digitalMarketing"
                >
                  Go To App & Software
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <div>
        <Header />
      </div>
    </div>
  );
}

export default GoAdsDigital;
