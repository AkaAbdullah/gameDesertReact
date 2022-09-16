import React from 'react'
import { Link } from 'react-scroll'

const MenuDropDown = () => {
  return (
    <>
      <nav className='navbar active' data-navbar=''>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <Link to='home' className='navbar-link skewBg' data-nav-link>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='services' className='navbar-link skewBg' data-nav-link>
              Services
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='carrier' className='navbar-link skewBg' data-nav-link>
              Carrier
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='contact' className='navbar-link skewBg' data-nav-link>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MenuDropDown
