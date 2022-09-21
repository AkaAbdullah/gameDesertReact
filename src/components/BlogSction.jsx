import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BlogSction = () => {
  const alljobs = [
    {
      id: 1,
      title: 'GAME DEVELOPER',
    },
    {
      id: 2,
      title: 'SENIOR 3D ARTIST',
    },
    {
      id: 3,
      title: 'GAME DESIGNER',
    },
  ]
  const [jobTitle, setJobTitle] = useState('')

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
            {alljobs.map((job) => (
              <div className='carrier-card'>
                <h2 className='carrier-title'>{job.title}</h2>
                <button className='apply-btn'>
                  <Link to='/jobs'>Apply now</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSction
