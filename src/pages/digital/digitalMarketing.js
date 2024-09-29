import React, { useState } from "react";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card3 from "../../assets/card3.webp";
import digital1 from "../../assets/digital.webp";
import FormCard from "../../cards/formCard";
import webdesign from "../../assets/web design.jpg";
import icon1 from "../../assets/icon1.jpg";
import socialmedia from "../../assets/socialmedia.png";
import socialmediamarketing from "../../assets/socialmediamarketing.png";
import promotion from "../../assets/promotion.png";
import team from "../../assets/team.png";
import Webdev from "../../cards/webdev";

function DigitalMarketing() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    message: "",
  };

  const [loginDetails, setLoginDetails] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetails);

    fetch("https://goadsdigital-92799-default-rtdb.firebaseio.com/user.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data posted successfully:", data);
        setLoginDetails(initialState);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

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
                  <p className="text-lead w-85 h-30 p-2">
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
                    href="/contact"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row">
        <div className="col-12 col-md-5 float-end align-items-start mt-4 position-absolute bottom-0 end-0">
          <div className="card w-50 p-3">
            <FormCard
              loginDetails={loginDetails}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>

      <section id="gallery" className="gallery section-padding-g-4">
        <div className="container text-center">
          <h2 className="font-weight-bold">
            Exploring The Benefits Of A Digital Company In Namakkal
          </h2>

          <div className="row g-4">
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img
                  src={card1}
                  className="card-img-top"
                  alt="Social Media Marketing"
                />
                <h3 className="text-center">Social Media Marketing</h3>
                <p className="text-lead">
                  If you are looking for consultation or someone to help manage
                  your marketing on the social media platforms, then use our SMM
                  strategies.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img
                  src={card2}
                  className="card-img-top"
                  alt="Search Engine Marketing"
                />
                <h3 className="text-center">Search Engine Marketing</h3>
                <p className="text-lead">
                  If your business fails to consider search results in its SEM
                  strategy, it's essentially missing out on a crucial
                  opportunity. That's why we enhance your SEM efforts and bring
                  it to a higher level.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img
                  src={card3}
                  className="card-img-top"
                  alt="Search Engine Optimization"
                />
                <h3 className="text-center">Search Engine Optimization</h3>
                <p className="text-lead">
                  Enhancing online visibility through strategic techniques to
                  optimize search engine rankings is known as Search Engine
                  Optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery p-g-2">
        <section className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-center p-2">
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{ height: "100vh" }}
                >
                  <h3 className="text-center p-3">
                    GROW TRAFFIC & INCREASE REVENUE
                  </h3>
                  <h2 className="font-weight-bold">
                    Appear On The Front Page Of Google!
                  </h2>
                  <p className="text-lead w-75 h-30 p-3">
                    Web Development Company that offers comprehensive solutions
                    for businesses. With expertise in Web Development, they
                    create customized websites tailored to meet client
                    requirements. Go Ads Digital Marketing ensures the use of
                    cutting-edge technologies, responsive design, and seamless
                    user experience. Their team of skilled professionals
                    delivers high-quality, visually appealing, and functional
                    websites. Whether it’s an e-commerce platform, corporate
                    website, or web application, Go Ads Digital Marketing is
                    dedicated to providing innovative Web Development Solutions
                    that help businesses thrive in the digital landscape.
                  </p>
                  <a
                    className="btn btn-danger btn-lg rounded-pill"
                    href="webDevelopment"
                  >
                    View Our SEO Plans
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-5 mx-auto d-block">
              <img src={digital1} alt="Web Development" className="img-fluid" />
            </div>
          </div>
        </section>
      </section>
      <hr />

      <section id="gallery" className="gallery section-padding-g-4 ">
        <div className="container text-center bg-tertiary-bg">
          <h2 className="font-weight-bold">
            Full Service Digital Marketing Agency In Namakkal
          </h2>

          <div className="row g-4">
            <div className="col-4 ">
              <div className="card h-100 border border-light-subtle">
                <img src={card1} className="card-img-top" alt="..." />
                <h3 className="text-center">All size business</h3>
                <p className="text-center">
                  We’ve worked with brands and we can confidently say that size
                  doesn’t matter. From startups, to Fortune companies, you can
                  grow your brand promise through us
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img src={card2} className="img-top" alt="..." />
                <h3 className="text-center">Awesome results</h3>
                <p className="text-center">
                  Our approach to designing and developing web/software
                  solutions is centered around our customers, ensuring that we
                  consistently deliver solutions that exceed your expectations.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card border border-light-subtle">
                <img src={card3} className="img-top" alt="..." />
                <h3 className="text-center">Significant ROI </h3>
                <p className="text-center">
                  By leveraging Go Ads Digital Marketing advanced tools, you can
                  accurately gauge the ROI of your campaigns, ensuring that your
                  digital marketing budget is allocated wisely and effectively,
                  without any wasted expenditure.
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
                <h2 className="font-weight-bold">
                  Grow Your Business with <br /> Digital Marketing Agency
                </h2>
                <p className="text-justify">
                  Unlock the potential of your business by leveraging the
                  expertise of a digital marketing agency, empowering you to
                  expand your reach, connect with your target audience, and
                  drive meaningful growth. Through strategic digital campaigns,
                  innovative branding, and data-driven insights, our agency will
                  optimize your online presence, enhance customer engagement,
                  and generate qualified leads, ultimately increasing
                  conversions and maximizing your ROI. Stay ahead of the
                  competition in the dynamic digital landscape, as our dedicated
                  team crafts tailored solutions tailored to your unique
                  business objectives, ensuring your success in the
                  ever-evolving world of online marketing.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 g-4">
              <img src={webdesign} alt="..." width="450" height="550" />
            </div>
          </div>
        </div>
      </section>

      <hr />
      <section className="gallery section-padding">
        <div class="elementor-heading-title">
          <div className="container col-sm g-4 p-1">
            <h1 className=" d-flex flex-column align-items-start justify-content-center font-weight-bold p-2">
              Would You Like To Start A Project With Us?
            </h1>
            <br />
            <h4 className="container">We Assure A Best Services</h4>
          </div>
          <br />
          <div class="row">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" className="btn btn-primary me-mx-3">
                GET QUOTE
              </button>
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
                <h2 className="font-weight-bold">
                  Benefits Of Digital Marketing
                </h2>
                <ul className="text-justify">
                  <li>Cost efficient</li>
                  <li>High return on investment</li>
                  <li>Growth options for small business</li>
                  <li>Easily Adjustable</li>
                  <li>Easily Targeting</li>
                  <li>Solving customer queries</li>
                  <li>Establishing brand reputation</li>
                  <li>Easily measurable</li>
                </ul>
              </div>
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
                        src={team}
                        className="card-img-top"
                        alt="..."
                        width="100"
                        height="100"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          To Target The Right Audience
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
                        src={socialmedia}
                        className="card-img-top"
                        alt="..."
                        width="100"
                        height="100"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          To Gain Brand Credibility
                        </h5>
                        <p>
                          In order to establish brand credibility, it is
                          essential to employ effective strategies that resonate
                          with the target audience and build trust in the
                          quality and reliability of the brand.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 g-3">
                    <div className="card w-100">
                      <img
                        src={socialmediamarketing}
                        className="me-2"
                        alt="..."
                        width="100"
                        height="100"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          To Accurately Measure All Results
                        </h5>
                        <p>
                          In order to precisely gauge and evaluate all outcomes,
                          a comprehensive and precise measurement system must be
                          implemented to ensure accuracy in assessing the
                          results obtained.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 g-3">
                    <div className="card w-100">
                      <img
                        src={promotion}
                        className="card-img-top"
                        alt="..."
                        width="100"
                        height="100"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          To Optimize And Obtain Better Conversion Rates
                        </h5>
                        <p>
                          You rapidly know how many people are viewing your ad
                          and what actions they take since every interaction is
                          tracked in digital advertising.
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
      <div>
        <Webdev />
      </div>
      <div>
        <section>
          <div class="container text-center ">
            <div class="row">
              <div class="col-12 col-md-3 g-2">
                <h2 className="font-weight-bold">Why Choose Us</h2>
              </div>
            </div>
            <div class="col-12 col-md-5 g-2">
              <h1 className="font-weight-bold">
                How To Stand From The Competition?
              </h1>
            </div>
            <div class="container mt-4">
              <ul class="custom-bullet">
                <li>
                  <h2>Provide Value for Customers</h2>
                </li>
                <br/>
                <div className="card-body">
                <p className="text-start">
                  Customer value refers to the degree of satisfaction
                  experienced by your customers in relation to your business. If
                  you provide proper value, then you earn the right to promote
                  your company in order to receive new customers. The key is to
                  always provide value.
                </p>
                </div>
                <li>
                  <h2>Build Brand Awareness</h2>
                </li>
                <li>
                  <h2>Start Marketing Today</h2>
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-6 g-4">
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100vh" }}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DigitalMarketing;
