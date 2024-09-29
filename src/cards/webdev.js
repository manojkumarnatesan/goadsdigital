import React from 'react'
import webdesign from "../assets/web design.jpg";

function Webdev() {
  return (
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
  )
}

export default Webdev;