import React from 'react'

const BlogSction = () => {
  return (
    <>
      <section className='section blog' id='carrier' aria-label='blog'>
        <div className='container'>
          <h2 className='h2 section-title'>
            <span className='span'>Carriers</span>
          </h2>

          <p className='section-text'>
            Following are the new openings to join our Team
          </p>
          <div className='carrier-section'>
            <div className='carrier-card'>
              <h2 className='carrier-title'>GAME DEVELOPER</h2>
              <button className='apply-btn'>Apply now</button>
            </div>
            <div className='carrier-card'>
              <h2 className='carrier-title'>SENIOR 3D ARTIST</h2>
              <button className='apply-btn'>Apply now</button>
            </div>
            <div className='carrier-card'>
              <h2 className='carrier-title'>GAME DESIGNER</h2>
              <button className='apply-btn'>Apply now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSction
