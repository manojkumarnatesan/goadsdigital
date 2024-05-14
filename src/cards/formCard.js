import React from "react";

function FormCard() {
  return (
    <div className="container-fluid p-4 g-4">
      <div className="row col-12 col-md-6 float-end align-items-start mt-4 position-absolute bottom-0 end-0">
        <div className=" w-50">
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

          <form action="your-endpoint-here">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" />
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
  );
}

export default FormCard;
