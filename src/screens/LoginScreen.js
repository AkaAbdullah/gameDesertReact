import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import TopHeader from '../components/TopHeader'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  let navigate = useNavigate()
  const { userName, setUserName } = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    let value = JSON.parse(localStorage.getItem('auth'))
    if (value === true) {
      navigate('/admin')
    } else {
      return
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (userName || password === 'admin') {
      navigate('/admin')
      localStorage.setItem('auth', true)
      localStorage.setItem('userName', 'admin')
      localStorage.setItem('password', 'admin')
    } else {
      window.alert('Wrong User name or Password')
      setUserName('')
      setPassword('')
    }
  }

  return (
    <>
      <TopHeader />
      <div className='container'>
        <div className='centerInputs'>
          <div className='loginInputs'>
            <label>User Name</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type='text'
              required
              placeholder='Enter User Name'
              className='nameInput'
            ></input>
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              required
              placeholder='Enter Password'
              className='nameInput'
            ></input>
            <button onClick={handleLogin} className='btnLogin'>
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LoginScreen
