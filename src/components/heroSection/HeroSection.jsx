import React from "react";
import "./HeroSection.css";
import ios from "../../assets/images/ios.png";
import googlePlay from "../../assets/images/googleplay.png";
import heroMobile from "../../assets/images/heromobile.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <section className="hero_section_wrapper">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-12 left_side_hero_content">
              <div className="hero_content">
                <h4>
                  Ride in style <br /> with our reliable <br /> and affordable
                  service
                </h4>
                <p>Ride with confidence, anywhere, anytime.</p>
                <h5>Download the Hitch app</h5>
                <div className="stores">
                  <Link to="#">
                    <img src={ios} alt="ios " className="img-fluid" />
                  </Link>
                  <Link to="#">
                    <img
                      src={googlePlay}
                      alt="play store"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="hero_mobile">
                <img src={heroMobile} alt="address" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row earn_row">
            <div className="col-lg-12">
                <div className="earn_more_hitch">
                        <p>You can earn more by becoming a <span> Hitch </span>driver</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
