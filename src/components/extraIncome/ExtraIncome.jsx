import React from "react";
import "./ExtraIncome.css";
import income from "../../assets/images/extraIncome.png";
import chat from "../../assets/images/chat.png";
import earn from "../../assets/images/earnn.png";
const ExtraIncome = () => {
  return (
    <>
      <section className="extra_income_wrapper">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="left_income">
                <img src={income} alt="image" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 right_income_section col-md-6 col-sm-12">
              <div className="right_">
                <h6>Earn extra income and be your own boss</h6>
                <p className="heaiding">
                  We are always looking for safe , reliable drivers to join our
                  team
                </p>
                <div className="tags">
                  <div className="join_team">
                    <img src={chat} alt="chat" className="img-fluid" />
                    <p>Join our team and earn <br/> extra cash!</p>
                  </div>
                  <div className="get_started">
                    <img src={earn} alt="icon" className="img-fluid" />
                    <p>Click here to get started with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtraIncome;
