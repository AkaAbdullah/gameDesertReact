import React, { useState } from 'react'
import Footer from '../components/Footer'
import TopHeader from '../components/TopHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddNewJob = () => {
  let navigate = useNavigate()
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')

  const handleAddJob = (e) => {
    e.preventDefault()
    const jobData = { jobTitle, jobDescription }
    axios
      .post('http://localhost:4000/api/addnew', jobData)
      .then((res) => {
        window.alert('New Job Addes Successfully')
        navigate('/admin')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <TopHeader />
      <div className='container'>
        <div className='addjobInputsContainer'>
          <label>Job Title</label>
          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            className='jobsInput'
            placeholder='job title'
            type='text'
          ></input>
          <label>Job Description</label>
          <textarea
            onChange={(e) => setJobDescription(e.target.value)}
            value={jobDescription}
            required
            className='jobDesc'
          ></textarea>
          <button
            onClick={handleAddJob}
            type='submit'
            className='createJobButton'
          >
            Create Job
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddNewJob
