import React, { useState,useRef  } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./GetStarted.css";

const GetStarted = () => {
  const form = useRef();
const _handleFormData=(e)=>{
  e.preventDefault();
  emailjs.sendForm('service_dto7iav', 'template_8zayv8s', form.current, 'FcXavLrtdLlJDFeFI')
  .then((result) => {
      console.log(result.text);
      console.log("msg send");
      toast("Message sent",{
        autoClose: 2000,
      })
      e.target.reset();
  }, (error) => {
      console.log(error.text);
  });
}
  return (
    <>
      <section className="get_started_wrapper" id="get_Started">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="started_heading">
                <h5>Get started</h5>
                <p>
                  Reach out to us anytime, any day. Our team is active 24/7 to
                  assist you in anyway. Send us a message and we will assist you
                  on time.
                </p>
              </div>
              <form ref={form} onSubmit={_handleFormData}>
              <div className="form_section">
                <input
                  className="form-control"
                  placeholder="Your Name"
                  type="text"
                  name="from_name"
                  required
                />
                <input
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                  name="message"
                  required
                />
                <button className="get_started" type="submit">Get Started</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </>
  );
};

export default GetStarted;
