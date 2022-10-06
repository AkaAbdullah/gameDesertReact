import React, { useState, useContext } from 'react'
import { NavBarContext } from '../context/cssContext'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ApplyForm = () => {
  let navigate = useNavigate()

  const { state6 } = useContext(NavBarContext)
  const [jobTitle, setJobTitle] = state6

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [linkedInURL, setLinkedInUrl] = useState('')
  const [filePath, setFilePath] = useState('')
  const [expSalery, setExpSalery] = useState('')
  const [whyJoin, setWhyJoin] = useState('')

  const onChangeFile = (e) => {
    setFilePath(e.target.files[0])
  }

  const changeOnClick = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('jobTitle', jobTitle)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('mobile', mobile)
    formData.append('linkedInURL', linkedInURL)
    formData.append('filePath', filePath)
    formData.append('expSalery', expSalery)
    formData.append('whyJoin', whyJoin)
    console.log(jobTitle)
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(mobile)
    console.log(linkedInURL)
    console.log(filePath)
    console.log(expSalery)
    console.log(whyJoin)

    axios
      .post('http://localhost:4000/api/jobs', formData)
      .then((res) => navigate('/thankyou'))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className='container'>
        <form
          onSubmit={changeOnClick}
          encType='multipart/from-data'
          className='input-div'
        >
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            required
            className='nameInput'
            placeholder='Please enter your first name here'
          ></input>
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='nameInput'
            type='text'
            placeholder='Please enter your last name here'
          ></input>
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='nameInput'
            type='email'
            placeholder='Please enter your email address here'
          ></input>
          <label>Mobile </label>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className='nameInput'
            type='number'
            placeholder='Please enter your Mobile Number'
          ></input>
          <label>LinkedIn URL</label>
          <input
            accept='application/pdf'
            value={linkedInURL}
            onChange={(e) => setLinkedInUrl(e.target.value)}
            className='nameInput'
            type='text'
          ></input>

          <hr></hr>
          <h3>Questions</h3>
          <label>What are your salary expectations?</label>
          <input
            value={expSalery}
            onChange={(e) => setExpSalery(e.target.value)}
            required
            className='nameInput'
            type='text'
          ></input>
          <label>Why do you want to work with Desert Game Studio?</label>
          <input
            value={whyJoin}
            onChange={(e) => setWhyJoin(e.target.value)}
            required
            className='nameInput'
            type='text'
          ></input>
          <label> Resume</label>
          <input
            type='file'
            name='filePath'
            onChange={onChangeFile}
            required
          ></input>
          <span className='attention'>PDF Format is recomended</span>
          <div className='submitContainer'>
            <button className='btnSubmit'>Submit</button>
            <button className='btnCancel'>Cancel</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ApplyForm
