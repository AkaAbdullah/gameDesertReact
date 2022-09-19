import React from 'react'
import { Link } from 'react-router-dom'

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
              <button className='apply-btn'>
                <Link to='/jobs'>Apply now</Link>
              </button>
            </div>
            <div className='carrier-card'>
              <h2 className='carrier-title'>SENIOR 3D ARTIST</h2>
              <button className='apply-btn'>
                <Link to='/jobs'>Apply now</Link>
              </button>
            </div>
            <div className='carrier-card'>
              <h2 className='carrier-title'>GAME DESIGNER</h2>
              <button className='apply-btn'>
                <Link to='/jobs'>Apply now</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSction
