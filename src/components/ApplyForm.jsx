import React, { useState } from 'react'

const ApplyForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [linkedInURL, setLinkedInUrl] = useState('')
  const [filePath, setFilePath] = useState('')
  const [expSalery, setExpSalery] = useState('')
  const [whyJoin, setWhyJoin] = useState('')

  return (
    <>
      <div className='container'>
        <div className='input-div'>
          <label>First Name</label>
          <input
            name='firstName'
            value={userData.fName}
            onChange={handleInputs}
            type='text'
            required
            className='nameInput'
            placeholder='Please enter your first name here'
          ></input>
          <label>Last Name</label>
          <input
            name='lastName'
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
            name='linkedInURL'
            value={userData.profileURL}
            onChange={handleInputs}
            className='nameInput'
            type='text'
          ></input>
          <label>Cover Letter</label>
          <input type='file'></input>
          <span className='attention'>PDF Format is recomended</span>
          <label> Resume</label>
          <input name='resume' required type='file'></input>
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
