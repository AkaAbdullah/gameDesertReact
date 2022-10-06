import React from 'react'
import TopHeader from '../components/TopHeader'
import Footer from '../components/Footer'
import axios from 'axios'
import { useQuery } from 'react-query'

const DeleteJobs = () => {
  const { isLoading, data } = useQuery('jobs', () => {
    return axios.get('http://localhost:4000/api/jobs')
  })
  if (isLoading) {
    return <h2>Loading....</h2>
  }

  const handleDelete = (id, e) => {
    e.preventDefault()
    axios
      .delete(`http://localhost:4000/api/jobs/${id}`)
      .then((res) => {
        alert('Job Deleted')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <TopHeader />
      <div className='container'>
        <div className='deleteJobsContainer'>
          <div className='carrier-section'>
            {data?.data.map((jobs) => (
              <div key={jobs} className='carrier-card1'>
                <h2 className='carrier-title1'>{jobs.jobTitle}</h2>
                <button
                  onClick={(e) => handleDelete(jobs._id, e)}
                  className='apply-btn'
                >
                  Delete Job
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DeleteJobs
