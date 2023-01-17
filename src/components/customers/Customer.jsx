import React, { useState } from 'react'
import './Customers.css';
import john from '../../assets/images/jona.png';
import gavin from '../../assets/images/park.png';
import betty from '../../assets/images/betty.png';
import twitter from '../../assets/images/twitter.png'
import CustomersCard from '../customersCard/CustomersCard';
import chatting from '../../assets/images/chatting.png'
const Customer = () => {
  const [totalNumber,setTotalNumber]=useState(3);
  const [customerData,setCustomerData]=useState([
    {
      image:john,
      heading:"Jonathan Taylor",
      disp:"CEO at Creativex",
      icon:twitter,
      para:"I have been using hitch for over 3 months now and I’ve never had a bad experience"
    },
    {
      image:gavin,
      heading:"Gavin Park",
      disp:"CEO at Orbital",
      icon:twitter,
      para:"As a busy working man, I don’t have time to drive. Hitch has got me covered all the time."
    },
    {
      image:betty,
      heading:"Betty Norton",
      disp:"Freelance Designer",
      icon:twitter,
      para:"I have been using Hitch to and from work every week. Great service I must say."
    },
    {
      image:betty,
      heading:"Betty Norton",
      disp:"Freelance Designer",
      icon:twitter,
      para:"I have been using Hitch to and from work every week. Great service I must say."
    },
    {
      image:gavin,
      heading:"Gavin Park",
      disp:"CEO at Orbital",
      icon:twitter,
      para:"As a busy working man, I don’t have time to drive. Hitch has got me covered all the time."
    }
  ]);
  const slice = customerData.slice(0,totalNumber);
  const _seeAllTest=()=>{
    setTotalNumber(totalNumber+totalNumber)
  }
  return (
    <>
    <section className='customers'>
        <div className='container-xxl'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 text-center'>
                    <h5 className='customer_heading'>Customers are <br/> loving <span>  Hitch</span></h5>
                </div>
            </div>
            <div className='row'>
                {
                  slice.map((e,idx)=>
                  <div className='col-lg-4 col-md-6 col-sm-12' key={idx}>
                      <CustomersCard
                      image={e.image}
                      heading={e.heading}
                      disp={e.disp}
                      icon={e.icon}
                      para={e.para}
                      />
                  </div>
                  )
                }
            </div>
                <div className='row justify-content-center button_testi'>
                    <div className='col-lg-2 text-center'>
                      <button onClick={_seeAllTest} className="seeTestimonials"><span><img src={chatting} alt="icon"/></span> See all testimonials</button>
                    </div>
                </div>
        </div>
    </section>
    </>
  )
}

export default Customer