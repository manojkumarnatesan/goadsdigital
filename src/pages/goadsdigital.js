import React from "react";
import webImage from "../assets/webimage.jpg";

function GoAdsDigital() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12 col-md-6"
          style={{
            backgroundImage: `url(${webImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat : "no-repeat"
          }}
        >
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
                significantly enhance your business’s reach and awareness. With
                our expertise, you can establish direct and personalized
                communication with your target audience, making it an invaluable
                opportunity. By leveraging various channels and platforms, our
                digital marketing agency aids in the growth of your online
                business, leading to increased sales and profits.
              </p>
              <a href="#" className="btn btn-danger btn-lg rounded-pill">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid p-4">
          <div className="row col-12 col-md-6 float-end align-items-start mt-4 position-absolute bottom-0 end-0">
            <div className="card-body w-50">
              <div className="card-body">
                <h5 >Select the Service</h5>
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
              </div>
            </div>

            <form action="your-endpoint-here">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoAdsDigital;
