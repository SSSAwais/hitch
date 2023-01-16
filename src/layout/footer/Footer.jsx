import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/images/footerLogo.png";
import { Link } from "react-router-dom";
import twitter from "../../assets/images/footTwitter.png";
import facebook from "../../assets/images/footFb.png";
import google from "../../assets/images/footGoogle.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="footer_logo">
                {/* <Link to="#"> */}
                <img src={footerLogo} alt="footer logo" className="img-fluid" />
                {/* </Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mobile_list">
              <h6>About</h6>
              <ul>
                <li>
                  <Link to="#">Our Mission</Link>
                </li>
                <li>
                  <Link to="#">Our Story</Link>
                </li>
                <li>
                  <Link to="#">Team Memebers</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mobile_list">
              <h6>Join the Hitch Family</h6>
              <ul>
                <li>
                  <Link to="#">Sign up as driver</Link>
                </li>
                <li>
                  <Link to="#">Add fleets</Link>
                </li>
                <li>
                  <Link to="#">Advertise with us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row social_media_section ">
            <div className="col-lg-6 col-md-6 col-sm-12" >
              <p> &copy; 2023 hitchafrica, All Rights Reserved</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="footer_icon">
                <Link to="#">
                  <img src={twitter} alt="twitter" className="img-fluid" />
                </Link>
                <Link to="#">
                  <img src={facebook} alt="facebook" className="img-fluid" />
                </Link>
                <Link to="#">
                  <img src={google} alt="google" className="img-fluid" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
