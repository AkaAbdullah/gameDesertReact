import React, { useEffect, useState } from 'react'
import TopHeader from '../components/TopHeader'
import Footer from '../components/Footer'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ViewApplications = () => {
  const navigate = useNavigate()
  const [drop, setDrop] = useState([])

  useEffect(() => {
    let value = JSON.parse(localStorage.getItem('auth'))
    if (value === true) {
      axios
        .get('http://localhost:4000/api/jobs')
        .then((res) => {
          console.log(res.data)
          setDrop(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      navigate('/login')
    }
  }, [])

  const { isLoading, data } = useQuery('applicants', () => {
    return axios.get('http://localhost:4000/api/applicants')
  })
  if (isLoading) {
    return <h2>Loading....</h2>
  }

  const handleDelete = (id, e) => {
    e.preventDefault()
    axios
      .delete(`http://localhost:4000/api/applicants/${id}`)
      .then((res) => {
        alert('Application Deleted')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <TopHeader />
      <div className='container'>
        <div className='titttile'>
          <h2>Applications for Jobs</h2>
        </div>

        <div className='applciationsContainer'>
          {data?.data.map((applicants) => (
            <div key={applicants._id}>
              <div className='applicantsCard'>
                <p className='jobTitleCard'>{applicants.jobTitle}</p>
                <p>
                  Name : {applicants.firstName} {applicants.lastName}
                </p>
                <p>Email : {applicants.email}</p>
                <p>Contact : {applicants.mobile}</p>
                <p>Expected Salery : {applicants.expSalery}</p>
                <p> Join Reason : {applicants.whyJoin}</p>
                <p>Apply Date : {applicants.applyDate}</p>
                <button className='viewResume'>Download CV</button>
                <button
                  onClick={(e) => handleDelete(applicants._id, e)}
                  className='deleteResume'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewApplications
