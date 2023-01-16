import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <>
      <section className="get_started_wrapper">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="started_heading">
                <h5>Get started</h5>
                <p>
                  Reach out to us anytime, any day. Our team is active 24/7 to
                  assist you in anyway. Send us a message and we will assist you
                  on time.
                </p>
              </div>
              <div className="form_section">
                <input
                  className="form-control"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                />
                <button className="get_started">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
