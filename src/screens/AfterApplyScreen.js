import React from 'react'
import TopHeader from '../components/TopHeader'
import Footer from '../components/Footer'

const AfterApplyScreen = () => {
  return (
    <>
      <TopHeader />
      <div className='container'>
        <div className='thankyou'>
          <h1>Thank you for Applying</h1>
          <p>Your Application has been submitted successfully</p>
          <p>We will contact you shortly</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AfterApplyScreen
