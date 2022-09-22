import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavBarContext } from '../context/cssContext'

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
  const { state6 } = useContext(NavBarContext)
  const [jobTitle, setJobTitle] = state6

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
            {alljobs.map((jobs) => (
              <div key={jobs.id} className='carrier-card'>
                <h2 className='carrier-title'>{jobs.title}</h2>
                <button
                  onClick={(e) => setJobTitle(jobs.title)}
                  className='apply-btn'
                >
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
