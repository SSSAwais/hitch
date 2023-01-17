import React from "react";
import "./CustomersCard.css";
const CustomersCard = (props) => {
  const { image, heading, disp, icon, para } = props;
  return (
    <>
      <div className="cus_card_wrapper">
        <div className="d-flex align-items-center justify-content-between upper_section">
            <div className="d-flex align-items-center">
          <img src={image} alt="img" className="img-fluid profile_img" />
          <div className="title_disp ">
            <h4>{heading}</h4>
            <p>{disp}</p>
          </div>
          </div>
         
          <img src={icon} alt="icon" className="img-fluid cus_icon" />
        </div>
        <p className="discription">{para}</p>
      </div>
    </>
  );
};

export default CustomersCard;
