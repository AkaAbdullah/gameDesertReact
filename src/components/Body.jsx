import React from 'react'
import backgroundImage from '../assests/images/hero-background.png'
import heroBanner from '../assests/images/hero-banner.png'

const Body = () => {
  return (
    <section
      className='section hero'
      id='home'
      aria-label='home'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='container'>
        <div className='hero-content'>
          <h1 className='hero-subtitle'>Desert Game Studio</h1>

          <h1 className='h1 hero-title'>
            We Make <span className='span'>Chart Toppings</span> Games
          </h1>

          <p className='hero-text'>
            Our app solutions mutiply your ROI, enhance brand visibilty, and
            delight your customers.
          </p>

          <button className='btn skewBg'>Read More</button>
        </div>

        <figure
          className='hero-banner img-holder'
          style={{ width: '700', height: '700' }}
        >
          <img
            src={heroBanner}
            width='700'
            height='700'
            alt='hero banner'
            className='w-100'
          />
        </figure>
      </div>
    </section>
  )
}

export default Body
