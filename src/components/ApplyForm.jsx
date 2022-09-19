import React from 'react'

const ApplyForm = () => {
  return (
    <>
      <div className='container'>
        <div className='input-div'>
          <label>First Name</label>
          <input
            type='text'
            required
            className='nameInput'
            placeholder='Please enter your first name here'
          ></input>
          <label>Last Name</label>
          <input
            className='nameInput'
            type='text'
            placeholder='Please enter your last name here'
          ></input>
          <label>Email Address</label>
          <input
            className='nameInput'
            type='email'
            placeholder='Please enter your email address here'
          ></input>
          <label>Mobile </label>
          <input
            className='nameInput'
            type='number'
            placeholder='Please enter your email address here'
          ></input>
          <label>LinkedIn URL</label>
          <input className='nameInput' type='text'></input>
          <label>Cover Letter</label>
          <input type='file'></input>
          <span className='attention'>PDF Format is recomended</span>

          <label> Resume</label>
          <input type='file'></input>
          <span className='attention'>PDF Format is recomended</span>
          <hr></hr>
          <h3>Questions</h3>
          <label>What are your salary expectations?</label>
          <input className='nameInput' type='text'></input>
          <label>Why do you want to work with Mindstorm Studios?</label>
          <input className='nameInput' type='text'></input>
          <div className='submitContainer'>
            <button className='btnSubmit'>Submit</button>
            <button className='btnCancel'>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyForm
