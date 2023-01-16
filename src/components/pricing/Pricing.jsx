import React from "react";
import "./Pricing.css";
import ios from "../../assets/images/ios.png";
import google from "../../assets/images/googleplay.png";
import priceImg from '../../assets/images/pricingAffordable.png'
const Pricing = () => {
  return (
    <>
      <section className="pricing_wrapper">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="pricing">
                <h5>Pricing is affordable</h5>
                <p>
                  Looking for an affordable way to get around town? Look no
                  further. With our competitive pricing, you can save money on
                  transportation without sacrificing safety or comfort.
                </p>
                <div className="stores">
                  <img src={ios} alt="ios" className="img-fluid" />
                  <img src={google} alt="google store" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="pricing_right_side">
                    <img src={ priceImg} alt="img" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
