import React from 'react'
import BestRide from '../../components/bestRide/BestRide'
import Customer from '../../components/customers/Customer'
import ExtraIncome from '../../components/extraIncome/ExtraIncome'
import GetStarted from '../../components/getStarted/GetStarted'
import HeroSection from '../../components/heroSection/HeroSection'
import Pricing from '../../components/pricing/Pricing'

const MainPage = () => {
  return (
    <>
    <HeroSection/>
    <BestRide/>
    <Pricing/>
    {/* <ExtraIncome/> */}
    <Customer/>
    {/* <GetStarted/> */}
    </>
  )
}

export default MainPage