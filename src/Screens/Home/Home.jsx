import React from 'react'
import CvContainer from '../CvContainer/CvContainer'
import FeaturedJobs from '../Featured/FeaturedJobs'
import Footer from '../Footer/Footer'
import LandingPage from '../Landing/Landing'
import Newsletter from '../Newsletter/Newsletter'
import CardContainer from '../Solution-Cards/CardContainer'

const Home = () => {
  return (
    <div>
        <LandingPage/>
        <CardContainer/>
        <FeaturedJobs/>
        <CvContainer/>
        <Newsletter/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home