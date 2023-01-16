import React from 'react';
import './RidingCard.css';
const RidingCards = (props) => {
    const {image,title,para}=props;
  return (
    <>
        <div className='cards_riding_wrapper'>
            <img src={image} alt="icon" className='img-fluid'/>
            <h6>{title}</h6>
            <p>{para}</p>
        </div>
    </>
  )
}

export default RidingCards