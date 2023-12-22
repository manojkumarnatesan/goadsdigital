import React from "react";
import "./digitalMarketing.css";
import card1 from "../../assets/card1.webp";

function DigitalMarketing() {
  return (
    <div className="container-fluid">
      <div class="row">
        <div className="col-6 col-md-6 justify-content float-end align-items-start mt-4 position-absolute bottom-50 end-75">
          <div className="card-body">
            <div>
              <h5>Select the Service</h5>
              <select
                className="form-select form-select-lg mb-1"
                aria-label="Large select example"
              >
                <option value="1">Digital Marketing</option>
                <option value="2">Search Engine Optimization</option>
                <option value="3">Web Development</option>
                <option value="4">Graphic Designing</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
