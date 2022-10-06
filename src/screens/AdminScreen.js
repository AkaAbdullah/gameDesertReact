import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import TopHeader from '../components/TopHeader'
import { Link, useNavigate } from 'react-router-dom'

const AdminScreen = () => {
  let navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('auth'))
    setUserName(localStorage.getItem('userName'))
    setPassword(localStorage.getItem('password'))
    setTimeout(() => {
      if (value === true) {
        console.log('user authentiocaed')
      } else {
        console.log('user not authenticated')
        navigate('/login')
      }
    }, 1000)
  })

  return (
    <>
      <TopHeader />
      <div className='container'>
        <div className='adminCards'>
          <Link to='/add' className='adminCard'>
            Create new Job
          </Link>
          <Link to='/applications' className='adminCard'>
            View Applications
          </Link>
          <Link to='/deletejobs' className='adminCard'>
            Update Jobs
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminScreen
