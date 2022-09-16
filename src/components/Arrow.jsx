import React from 'react'
import { Link } from 'react-scroll'
import { BsArrowUpCircle } from 'react-icons/bs'

const Arrow = () => {
  return (
    <>
      <Link to='top' class='back-top-btn active' aria-label='back to top'>
        <BsArrowUpCircle />
      </Link>
    </>
  )
}

export default Arrow
