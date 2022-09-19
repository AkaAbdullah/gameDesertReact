import React, { useState } from 'react'

const ApplyForm = () => {
  const [userData, setUserData] = useState({
    fName: '',
    lName: '',
    email: '',
    mobile: '',
    profileURL: '',
    expSalery: '',
    whyJoin: '',
  })

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault()
    const { fName, lName, email, mobile, profileURL, expSalery, whyJoin } =
      userData
    const res = await fetch('/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fName,
        lName,
        email,
        mobile,
        profileURL,
        expSalery,
        whyJoin,
      }),
    })
    const data = await res.json()
    if (res.status === 422 || !data) {
      window.alert('invalid Input')
    } else {
      window.alert('Application Submited')
    }
  }

  return (
    <>
      <div className='container'>
        <div className='input-div'>
          <label>First Name</label>
          <input
            name='fName'
            id='fName'
            value={userData.fName}
            onChange={handleInputs}
            type='text'
            required
            className='nameInput'
            placeholder='Please enter your first name here'
          ></input>
          <label>Last Name</label>
          <input
            name='lName'
            value={userData.lName}
            onChange={handleInputs}
            className='nameInput'
            type='text'
            placeholder='Please enter your last name here'
          ></input>
          <label>Email Address</label>
          <input
            name='email'
            value={userData.email}
            onChange={handleInputs}
            className='nameInput'
            type='email'
            placeholder='Please enter your email address here'
          ></input>
          <label>Mobile </label>
          <input
            name='mobile'
            value={userData.mobile}
            onChange={handleInputs}
            className='nameInput'
            type='number'
            placeholder='Please enter your Mobile Number'
          ></input>
          <label>LinkedIn URL</label>
          <input
            name='profileURL'
            value={userData.profileURL}
            onChange={handleInputs}
            className='nameInput'
            type='text'
          ></input>
          <label>Cover Letter</label>
          <input type='file'></input>
          <span className='attention'>PDF Format is recomended</span>
          <label> Resume</label>
          <input required type='file'></input>
          <span className='attention'>PDF Format is recomended</span>
          <hr></hr>
          <h3>Questions</h3>
          <label>What are your salary expectations?</label>
          <input
            name='expSalery'
            value={userData.expSalery}
            onChange={handleInputs}
            required
            className='nameInput'
            type='text'
          ></input>
          <label>Why do you want to work with Mindstorm Studios?</label>
          <input
            name='whyJoin'
            value={userData.whyJoin}
            onChange={handleInputs}
            required
            className='nameInput'
            type='text'
          ></input>
          <div className='submitContainer'>
            <button onClick={postData} className='btnSubmit'>
              Submit
            </button>
            <button className='btnCancel'>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyForm
