import React, { useState } from "react";

import FormCard from "../../cards/formCard";

function DigitalMarketing() {
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
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data posted successfully:", data);
        setLoginDetails(initialState);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
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
            <FormCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
