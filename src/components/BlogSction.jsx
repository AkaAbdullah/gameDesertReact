import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavBarContext } from '../context/cssContext'
import axios from 'axios'
import { useQuery } from 'react-query'

const BlogSction = () => {
  const { state6 } = useContext(NavBarContext)
  const [jobTitle, setJobTitle] = state6

  const { isLoading, data } = useQuery('jobs', () => {
    return axios.get('https://gamedesert.herokuapp.com/api/jobs')
  })
  if (isLoading) {
    return <h2>Loading....</h2>
  }

  return (
    <>
      <section className='section blog' id='carrier' aria-label='blog'>
        <div className='container'>
          <h2 className='h2 section-title'>
            <span className='span'>Careers</span>
          </h2>

          <p className='section-text'>
            Following are the new openings to join our Team
          </p>
          <div className='carrier-section'>
            {data?.data.map((jobs) => (
              <div key={jobs} className='carrier-card'>
                <h2 className='carrier-title'>{jobs.jobTitle}</h2>
                <button
                  onClick={(e) => setJobTitle(jobs.jobTitle)}
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
