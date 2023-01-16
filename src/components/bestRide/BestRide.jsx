import React, { useState } from "react";
import "./BestRide.css";
import mobile from "../../assets/images/mobile.png";
import checked from "../../assets/images/saftey.png";
import avail from "../../assets/images/avail.png";
import reward from "../../assets/images/rewards.png";
import RidingCards from "../ridingCard/RidingCards";
const BestRide = () => {
  const [card, setCard] = useState([
    {
      image: mobile,
      title: "Convinience",
      para: "Get a ride in minutes with our easy - to - use app.",
    },
    {
      image: checked,
      title: "Safety",
      para: "Ride with confidence with our strict driver screening process.",
    },
    {
      image: avail,
      title: "Availability",
      para: "Ride with us 24 hours, 7 times across the country.",
    },
    {
      image: reward,
      title: "Rewards",
      para: "You can earn rewards when you ride with us frequently.",
    },
  ]);
  return (
    <>
      <section className="best_ride">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row d-flex">
                {card.map((e, idx) => (
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <RidingCards
                      image={e.image}
                      title={e.title}
                      para={e.para}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="riding_exp_right">
                <h5>Hitch provides the <br/> best riding experience</h5>
                <p>
                  We provide you with amazing riding experience across the
                  country. Download the Hitch Now
                </p>
                <button>Check all features</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestRide;
